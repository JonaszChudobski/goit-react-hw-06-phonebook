import React from 'react';
import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import {
  selectVisibleContacts,
} from 'redux/selectors';

export const ContactsList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {visibleContacts &&
        visibleContacts.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
    </ul>
  );
};
