import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => {
  const options = categories.map((category) => (
    <option value={category} key={category}>
      {category}
    </option>
  ));

  return (
    <imput type="text" className="input">
      <select>
        {options}
      </select>
      <button type="submit">Add Book</button>
    </imput>
  );
};

export default BooksForm;
