import { NavLink, Route, Routes } from 'react-router-dom';
import React from 'react';
import { IoIosPerson } from 'react-icons/io';
import Books from './components/Books';
import Categories from './components/Categories';

const App = () => (
  <>
    <header>
      <div className="header__container">
        <h1>Bookstore CMS</h1>
        <nav className="nav">
          <NavLink
            style={({ isActive }) => ({
              opacity: isActive ? 1 : 0.5,
            })}
            className="nav__link"
            to="/"
          >
            BOOKS
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              opacity: isActive ? 1 : 0.5,
            })}
            className="nav__link"
            to="/categories"
          >
            CATEGORIES
          </NavLink>
        </nav>
        <IoIosPerson className="account" />
      </div>
    </header>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
