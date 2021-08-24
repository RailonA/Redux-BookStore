import React from 'react';
import PropTypes from 'prop-types';
import '../styles/book.css';

function Book({ book, handleRemoveBook }) {
  return (

    <div className="Lesson-Panel align-center">
      <div className="left-title-area">
        <span className="category font-normal fw-bold">{book.category}</span>
        <div className="title font-normal fullwidth robotoSlabFont fw-bold">{book.title}</div>
        <span className="sussan font-normal mid-bold fullwidth robotoSlabFont">Suzanne Collins</span>

        <div className="delete-area">
          <span className="Comments">Comments</span>
          <button className="remove  mid-bold font-normal robotoSlabFont" type="button" onClick={() => handleRemoveBook(book)}>Remove</button>
          <span className="Edit">Edit</span>
        </div>
      </div>

      <div className="align-center">

        <div className="oval-area-wrapper align-center">
          <div className="chart" aria-label="chart" />

          <div className="d-flex flex-column">
            <span className="percentage font-normal">64%</span>
            <span className="">Completed</span>
          </div>
        </div>

        <div className="d-flex flex-column">
          <span className="Current-Chapter  mid-bold font-normal robotoSlabFont">Current Chapter</span>
          <span className="Current-Lesson  mid-bold font-normal robotoSlabFont">Chapter 17</span>
          <span className="Update-progress font-normal robotoSlabFont">Update progress</span>
        </div>

      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
