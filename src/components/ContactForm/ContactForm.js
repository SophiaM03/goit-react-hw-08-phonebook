import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/contacts/selectors';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(6),
      name,
      number,
    };
    if (
      contacts.some(
        ({ name, number }) => contact.name === name || contact.number === number
      )
    ) {
      alert(
        `${contact.name} already in contacts! Check contact name or number`
      );
      return;
    }
    dispatch(addContact(contact));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <Label htmlFor={name}>
        Name
        <Input
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter the name"
          value={name}
        />
      </Label>
      <Label>
        Number
        <Input
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter the number"
          value={number}
        />
      </Label>
      <Button type="submit">Add Contact</Button>
    </Form>
  );
}
