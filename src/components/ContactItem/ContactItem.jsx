import React from 'react';
import {
  ListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactItem.styled';

export class ContactItem extends React.Component {
  handleDelete = () => {
    const { id, onDelete } = this.props;
    onDelete(id);
  };

  render() {
    const { name, number } = this.props;
    return (
      <ListItem>
        <ContactName>{name}</ContactName>
        <ContactNumber>{number}</ContactNumber>
        <DeleteButton onClick={this.handleDelete}>Видалити</DeleteButton>
      </ListItem>
    );
  }
}
