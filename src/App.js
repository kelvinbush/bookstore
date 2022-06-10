/* eslint-disable quotes */
import { NavLink, Route, Routes } from "react-router-dom";
import React from "react";
import Books from "./components/Books";
import Categories from "./components/Categories";

const App = () => (
  <div>
    <header>
      <h1>Bookstore CMS</h1>
      <nav className="nav">
        <NavLink className="nav__link" to="/">
          BOOKS
        </NavLink>
        <NavLink className="nav__link" to="/categories">
          CATEGORIES
        </NavLink>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
