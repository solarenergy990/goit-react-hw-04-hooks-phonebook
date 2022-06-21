import React, { useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import initialContacts from '../../contacts.json';
import shortid from 'shortid';

import useLocalStorage from '../../hooks/useLocalStorage';

// import Contact from '../../interfaces/Contact.interface'



const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  const [filter, setFilter] = useState('');

  const addContact = (name: string, number: string) => {
    

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const checkedContactNames = contacts.map(contact => {
      return contact.name.toLowerCase();
    });

    if (!checkedContactNames.includes(name.toLowerCase())) {
      setContacts(prevContacts => {
        return [...prevContacts, contact];
      });
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  const deleteContact = (contactId: string) => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(evt.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactsList
        contacts={visibleContacts}
        onContactDelete={deleteContact}
      />
    </div>
  );
};

export default App;
