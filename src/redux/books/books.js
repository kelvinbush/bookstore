import axios from 'axios';

const baseUrl =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/yczhKH02Nmk114disNJU/books';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';

const initialState = {
  books: [],
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  id,
});

const fetchBooks = (books) => ({
  type: FETCH_BOOKS,
  books,
});

export const getBooks = () => (dispatch) => {
  axios
    .get(baseUrl)
    .then((response) => {
      dispatch(fetchBooks(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

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
    case FETCH_BOOKS:
      return {
        ...state,
        books: action.books,
      };
    default:
      return state;
  }
};
