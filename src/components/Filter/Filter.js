import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(setFilter(form.value));
  };
  return (
    <form id="filterForm" className={css.form}>
      <label className={css.label}>
        Find contacts by name
        <input type="text" name="filter" onChange={handleChange}></input>
      </label>
    </form>
  );
};
