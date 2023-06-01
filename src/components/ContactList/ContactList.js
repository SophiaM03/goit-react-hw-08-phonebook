import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsOperations';
import { getFilteredContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/contactsOperations';
import { List } from './ContactList.styled';

function ContactList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
