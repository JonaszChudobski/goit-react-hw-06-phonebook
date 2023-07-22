import React from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContact } from 'redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContact);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const isExist = contacts.find(contact => contact.name === name);
    isExist
      ? alert(`${name} already exists in contacts.`)
      : dispatch(addContact(name, number));
    form.reset();
  };

  return (
    <form id="form" className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="number">Number</label>
      <input
        id="number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};
