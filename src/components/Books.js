import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import { getBooks } from '../redux/books/books';

const Books = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const keys = Object.keys(books);
  return (
    <section className="books">
      {keys.length > 0
        && keys.map((key) => (
          <Book
            key={key}
            title={books[key][0].title}
            author={books[key][0].author}
            id={key}
          />
        ))}
      <hr />
      <AddBook />
    </section>
  );
};

export default Books;
