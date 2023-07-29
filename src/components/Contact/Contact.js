import React from 'react';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div>
      <p>
        {contact.name}: {contact.phone}
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

Contact.propTypes = {
  contact: PropTypes.object,
};
