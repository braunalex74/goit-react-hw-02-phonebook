import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';

export class ContactList extends React.Component {
  render() {
    const { contacts, onDelete } = this.props;
    return (
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={onDelete}
          />
        ))}
      </ul>
    );
  }
}
