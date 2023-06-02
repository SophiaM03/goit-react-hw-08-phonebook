import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { getFilteredContacts } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { List } from './ContactList.styled';
import { isTokenExists } from 'redux/auth/auth-selectors';

function ContactList() {
  const dispatch = useDispatch();
  const isToken = useSelector(isTokenExists);

  useEffect(() => {
    if (isToken) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isToken]);

  const contacts = useSelector(getFilteredContacts);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <List>
      {contacts.map(({ id, number, name }) => {
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button onClick={() => onDeleteContact(id)} type="button">
              Delete
            </button>
          </li>
        );
      })}
    </List>
  );
}

export default ContactList;
