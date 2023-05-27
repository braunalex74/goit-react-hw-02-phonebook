import React from 'react';
import { nanoid } from 'nanoid';
import { Container, Title, FilterInput } from './App.styled';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = (name, number) => {
    const { contacts } = this.state;
    const newContact = { id: nanoid(), name, number };
    this.setState({ contacts: [...contacts, newContact] });
  };

  handleDeleteContact = id => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: updatedContacts });
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onAdd={this.handleAddContact} contacts={contacts} />

        <h2>Contacts</h2>
        <FilterInput
          type="text"
          value={filter}
          onChange={this.handleFilterChange}
          placeholder="Search contacts..."
        />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.handleDeleteContact}
        />
      </Container>
    );
  }
}
