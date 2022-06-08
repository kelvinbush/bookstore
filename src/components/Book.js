import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBookAsync } from '../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      <button onClick={() => dispatch(deleteBookAsync(id))} type="button">
        Remove
      </button>
    </div>
  );
};

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
