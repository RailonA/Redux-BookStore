import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAction } from '../actions';
import '../styles/bookForm.css';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => {
  const options = categories.map((category) => (
    <option value={category} key={category}>
      {category}
    </option>
  ));

  const [book, setBook] = useState({ title: '', category: '' });
  const dispatch = useDispatch();

  let title = '';
  let category = '';

  const handleChange = (e) => {
    if (e.target.name === 'title') {
      title = e.target.value;
      setBook((state) => ({ ...state, title }));
    }
    if (e.target.name === 'category') {
      category = e.target.value;
      setBook((state) => ({ ...state, category }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createAction({ ...book, id: Math.random().toFixed(2) }));
  };

  return (
    <div className="bg-grey round-bottom box-shadow">
      <div className="center max-width-90 border-top">
        <div className="formTitle">Add New Book</div>
        <form onSubmit={handleSubmit} className="bookForm">
          <input name="title" onChange={handleChange} placeholder="Book Title" type="text" className="input" />
          <select name="category" onChange={handleChange}>
            {options}
          </select>
          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default BooksForm;
