import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { FaTrashAlt } from 'react-icons/fa';
import css from './Contacts.module.css';

class Contacts extends Component {
  render() {
    return (
      <ul className={css.contactsList}>
        {this.props.contacts.map(contact => (
          <li key={nanoid()} className={css.contactsList__item}>
            <span className={css.contactsList__name}>{contact.name}</span>:{' '}
            <span className={css.contactsList__number}>{contact.number}</span>
            <button
              className={css.contactsList__btn}
              type="button"
              onClick={() => this.props.onDeleteContact(contact.id)}
            >
              Delete <FaTrashAlt className={css.contactsList__icon} />
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Contacts;
