import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Contacts.module.css';

class Contacts extends Component {
  render() {
    return (
      <ul className={css.contactsList}>
        {this.props.contacts.map(contact => (
          <li key={nanoid()}>
            <span>{contact.name}</span>: <span>{contact.number}</span>
            <button type="button">Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Contacts;
