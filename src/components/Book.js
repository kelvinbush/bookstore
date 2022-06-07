import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <div>
    <h3>{title}</h3>
    <p>{author}</p>
    <button type="button">Remove</button>
  </div>
);

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
