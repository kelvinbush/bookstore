/* eslint-disable quotes */
import { NavLink, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { IoIosPerson } from "react-icons/io";
import { CgClose, CgMenu } from "react-icons/cg";
import Books from "./components/Books";
import Categories from "./components/Categories";

const App = () => {
  const [modal, setModal] = useState(true);

  // eslint-disable-next-line no-unused-vars
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <header className={`${modal ? "" : "close_nav"}`}>
        <h1>Bookstore CMS</h1>
        <CgMenu onClick={() => toggleModal()} className="nav__menu" />
        <div className="nav">
          <nav className="nav__links">
            <NavLink onClick={() => toggleModal()} className="nav__link" to="/">
              BOOKS
            </NavLink>
            <NavLink
              onClick={() => toggleModal()}
              className="nav__link"
              to="/categories"
            >
              CATEGORIES
            </NavLink>
          </nav>
          <IoIosPerson onClick={() => toggleModal()} className="nav__person" />
          <CgClose onClick={() => toggleModal()} className="close" />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
};

export default App;
