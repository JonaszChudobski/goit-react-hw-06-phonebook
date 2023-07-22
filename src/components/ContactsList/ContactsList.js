import React from "react";
import css from './ContactsList.module.css';
import { Contact } from '../Contact/Contact';

export const ContactsList = () => {
    return (
      <ul>
        {contacts.map(contact => ( // change it!
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    );
}