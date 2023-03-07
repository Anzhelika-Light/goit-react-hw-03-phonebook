import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FaTrashAlt } from 'react-icons/fa';
import css from './ContactList.module.css';

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
  };
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

export default ContactList;
