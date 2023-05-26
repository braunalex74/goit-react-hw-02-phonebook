import React from 'react';

export class ContactItem extends React.Component {
  handleDelete = () => {
    const { id, onDelete } = this.props;
    onDelete(id);
  };

  render() {
    const { name, number } = this.props;
    return (
      <li>
        {name}: {number}
        <button type="button" onClick={this.handleDelete}>
          Видалити
        </button>
      </li>
    );
  }
}
