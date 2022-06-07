const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';

const initialState = {
  books: [],
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const deleteBook = (book) => ({
  type: DELETE_BOOK,
  book,
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
        books: state.books.filter((b) => b.id !== action.book.id),
      };
    default:
      return state;
  }
};
