import React from 'react';
import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { getContact, getFilter } from 'redux/selectors';

const getVisibleContacts = (contacts, filter) => {
  if (filter.filter !== '') {
    let filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.filter.toLowerCase())
    );
    return filtered;
  } else {
    return contacts;
  }
};

export const ContactsList = () => {
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

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
