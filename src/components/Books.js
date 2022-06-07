import React from 'react';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const books = [{
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    id: 1,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    id: 2,
  },
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    id: 3,
  },
  ];
  return (
    <div>
      {books.map((book) => <Book key={book.id} title={book.title} author={book.author} />)}
      <AddBook />
    </div>
  );
};

export default Books;
