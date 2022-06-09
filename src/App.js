/* eslint-disable quotes */
import { NavLink, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { IoIosPerson } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import Books from "./components/Books";
import Categories from "./components/Categories";

const App = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <header>
        <h1>Bookstore CMS</h1>
        {modal ? (
          <div className="nav">
            <nav>
              <NavLink
                onClick={() => toggleModal()}
                className="nav__link"
                to="/"
              >
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
            <IoIosPerson
              onClick={() => toggleModal()}
              className="nav__person"
            />
            <CgClose onClick={() => toggleModal()} className="close" />
          </div>
        ) : (
          <FiMenu onClick={() => toggleModal()} className="nav__menu" />
        )}
      </header>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
};

export default App;
