import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ contact }) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contact.id));
    
  return (
    <div>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button
        className={css.deleteBtn}
        type="button"
        id={contact.id}
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};
