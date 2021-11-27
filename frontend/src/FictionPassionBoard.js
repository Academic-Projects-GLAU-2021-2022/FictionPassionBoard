import React, { useState, useEffect } from "react";
import AddBook from "./components/admin/AddBook";
import BooksCatelogue from "./components/books/BooksCatelogue";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./FictionPassionBoard.css";
import LoadingScreen from "./components/books/UIElements/LoadingScreen";

const FictionPassionBoard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div>
          <Router>
            <Routes>
              <Route exact path="/" element={<BooksCatelogue />} />
              <Route exact path="/addBook" element={<AddBook />} />
            </Routes>
          </Router>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default FictionPassionBoard;
