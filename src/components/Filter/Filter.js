import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(setFilter(form.value));
  };
  return (
    <>
      <h4>Find contacts by name</h4>
      <input type="text" name="filter" onChange={handleChange}></input>
    </>
  );
};
