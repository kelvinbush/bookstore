const ADD_BOOK = 'ADD_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';

const initialState = {
  books: [],
};

export function addBook(book) {
  return {
    type: ADD_BOOK,
    book,
  };
}

export function deleteBook(book) {
  return {
    type: DELETE_BOOK,
    book,
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.book],
      };
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter(b => b.id !== action.book.id),
      };
    default:
      return state;
  }
}
