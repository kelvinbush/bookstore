import React from 'react';
import Book from "./Book";
import AddBook from "./AddBook";

const Books = () => {
  const books = [{
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
  },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
    },
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
    }
  ]
  return (
    <div>
      {books.map(book => <Book title={book.title} author={book.author} />)}
      <AddBook />
    </div>
  );
};

export default Books;
