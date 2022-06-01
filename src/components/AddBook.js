import React from 'react';

const AddBook = () => {
  return (
    <form>
      <input style={{
        marginRight: "1rem"
      }} type="text" placeholder="Title" />
      <input style={{
        marginRight: "1rem"
      }} type="text" placeholder="Author" />
      <button>Add Book</button>
    </form>
  );
};


export default AddBook;
