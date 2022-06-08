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
    <form onSubmit={handleSubmit}>
      <input
        style={{
          marginRight: '1rem',
        }}
        type="text"
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={(e) => handleChange(e)}
      />
      <input
        style={{
          marginRight: '1rem',
        }}
        name="author"
        type="text"
        placeholder="Author"
        value={form.author}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
