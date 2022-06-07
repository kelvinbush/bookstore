import { combineReducers, createStore } from 'redux';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducers = combineReducers({
  books: bookReducer,
  categories: categoriesReducer,
});

const store = createStore(reducers);

export default store;
