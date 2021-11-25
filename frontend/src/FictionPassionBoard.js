import React from "react";
import AddBook from "./components/admin/AddBook";
import BooksCatelogue from "./components/books/BooksCatelogue";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const FictionPassionBoard = () => {
  return (
    /*<AddBook /><StarRating /><BooksCatelogue />*/
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<BooksCatelogue />} />
          <Route exact path="/addBook" element={<AddBook />} />
        </Routes>
      </Router>
    </div>
  );
};

export default FictionPassionBoard;
