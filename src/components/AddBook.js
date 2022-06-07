import React from 'react';

const AddBook = () => (
  <form>
    <input
      style={{
        marginRight: '1rem',
      }}
      type="text"
      placeholder="Title"
    />
    <input
      style={{
        marginRight: '1rem',
      }}
      type="text"
      placeholder="Author"
    />
    <button type="submit">Add Book</button>
  </form>
);

export default AddBook;
