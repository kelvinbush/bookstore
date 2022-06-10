import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/books';

const AddBook = () => {
  const [form, setForm] = useState({ title: '', author: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      ...form,
      item_id: uuidv4(),
      category: '',
    };
    dispatch(postBook(book));
    setForm({ title: '', author: '' });
  };

  return (
    <div className="add-book">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book title"
          value={form.title}
          onChange={(e) => handleChange(e)}
        />
        <input
          name="author"
          type="text"
          placeholder="Book Author"
          value={form.author}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
