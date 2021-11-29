import { booklists } from "./books_list";
import React, { useState, useEffect } from "react";
import "./BooksCatelogue.css";

import { FaSearch } from "react-icons/fa";
import { getBooks } from "./helper/booksapicalls";
import BookCard from "./BookCard";

const BooksCatelogue = ({ navigation }) => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadAllBooks();
  }, []); //[JSON.stringify(books)]

  const loadAllBooks = () => {
    getBooks()
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setBooks(data);
        }
      })
      .catch((err) => {
        return err;
      });
  };

  if (books.length === 0) {
    <h2>No Places Found</h2>;
  }
  return (
    <div className="header">
      <div className="top">
        <h1>Fiction Passion Board </h1>
      </div>
      {books.length === 0 ? (
        <div className="noBook">
          <i
            className="fa fa-exclamation-triangle"
            style={{ color: "red" }}
          ></i>{" "}
          No Books Found.
        </div>
      ) : (
        <div className="bottom">
          {books.map((book, index) => (
            <div className="bklst" key={index}>
              <BookCard
                book={book}
                key={book._id}
                id={book._id}
                image={book.imageUrl}
                title={book.title}
                description={book.description}
                author={book.author}
                publication={book.publication}
                totalStars={book.totalStars}
                totalReviews={book.totalReviews}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BooksCatelogue;
