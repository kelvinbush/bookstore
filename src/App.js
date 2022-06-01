import {Link, Route, Routes} from "react-router-dom";
import Books from "./components/Books";
import Categories from "./components/Categories";
import React from "react";

const App = () => (<div>
  <header>
    <h1>Bookstore CMS</h1>
    <nav>
      <Link style={{
        marginRight: "1rem"
      }} to="/">BOOKS</Link>
      <Link to="/categories">CATEGORIES</Link>
    </nav>
  </header>
  <Routes>
    <Route path="/" element={<Books />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
</div>);

export default App;
