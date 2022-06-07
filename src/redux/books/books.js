const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';

const initialState = {
  books: [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      id: '1',
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      id: '2',
    },
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      id: '3',
    },
  ],
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  id,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.book],
      };
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.id),
      };
    default:
      return state;
  }
};
