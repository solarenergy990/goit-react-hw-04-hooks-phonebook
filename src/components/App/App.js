import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import initialContacts from '../../contacts.json';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addContact = data => {
    const { name, number } = data;
    const { contacts } = this.state;

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const checkedContactNames = contacts.map(contact => {
      return contact.name.toLowerCase();
    });

    if (!checkedContactNames.includes(name.toLowerCase())) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList
          contacts={visibleContacts}
          onContactDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
