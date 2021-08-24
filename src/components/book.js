import React from 'react';
import PropTypes from 'prop-types';
import '../styles/book.css';

function Book({ book, handleRemoveBook }) {
  return (

    <div className="Lesson-Panel align-center">
      <div className="left-title-area">
        <span className="category font-normal">{book.category}</span>
        <div className="title font-normal">{book.title}</div>
        <span className="sussan font-normal">Suzanne Collins</span>

        <div className="delete-area">
          <span className="Comments">Comments</span>
          <button className="remove font-normal" type="button" onClick={() => handleRemoveBook(book)}>Remove</button>
          <span className="Edit">Edit</span>
        </div>
      </div>

      <div className="align-center">

        <div className="oval-area-wrapper align-center">
          <div className="chart" aria-label="chart" />

          <div className="percentage-area">
            <span className="percentage font-normal">64%</span>
            <span className="">Completed</span>
          </div>
        </div>

        <div className="update-area">
          <span className="Current-Chapter font-normal">Current Chapter</span>
          <span className="Current-Lesson font-normal">Chapter 17</span>
          <span className="Update-progress font-normal">Update progress</span>
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
