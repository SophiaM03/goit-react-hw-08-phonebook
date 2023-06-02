import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useAuth } from 'components/hooks/useAuth';
import React from 'react';

export const ContactsPage = () => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return null;
  }
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
