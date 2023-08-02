import React from 'react';
import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import css from './ContactList.module.css';

export const ContactsList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {visibleContacts &&
        visibleContacts.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
    </ul>
  );
};
