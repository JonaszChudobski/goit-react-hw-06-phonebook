import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = `${form.elements.name.value}`;
    const email = `${form.elements.email.value}`;
    const password = `${form.elements.password.value}`;
    dispatch(register({ name, email, password }));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username:
        <input type="text" name="name" autoComplete="off" />
      </label>
      <label className={css.label}>
        Email:
        <input type="email" name="email" autoComplete="off" />
      </label>
      <label className={css.label}>
        Password:
        <input type="password" name="password" autoComplete="off" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
