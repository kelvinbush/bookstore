import React from 'react';

const Book = ({title, author}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
};

export default Book;
