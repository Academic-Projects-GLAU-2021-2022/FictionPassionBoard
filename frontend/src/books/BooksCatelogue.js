import { booklists } from "./books_list";
import React, { useState, useEffect } from "react";
import "./BooksCatelogue.css";
import { FaSearch } from "react-icons/fa";
import { getBooks } from "./helper/booksapicalls";
import Card from "./Card";

const BooksCatelogue = ({ navigation }) => {
  /*const [searchQuery, updateSearchQuery] = useState();
  const [timeoutId, updateTimeoutId] = useState();

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    updateSearchQuery(event.title.value);
    const timeout = setTimeout(() => console.log("Apicall"), 500);
  };
*/
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(false);

  //const { title, description, author, publication, _id } = books;

  useEffect(() => {
    loadAllBooks();
  }, []); //[JSON.stringify(books)]

  const loadAllBooks = () => {
    getBooks()
      .then((data) => {
        if (data.error) {
          setError(data.error);
          //console.log(data.error);
        } else {
          setBooks(data);
          //console.log("data", data);
          //console.log("books", books);
        }
      })
      .catch((err) => {
        //console.log(err);
        return err;
      });
  };

  return (
    <div className="header">
      <div className="top">
        <h1>Fiction Passion Board </h1>
        <div className="search">
          <FaSearch />
          <input
            type="text"
            placeholder="Search Book"
            //value={searchQuery}
            //onChange={onTextChange}
          />
        </div>
      </div>
      <div className="bottom">
        {books.map((book, index) => (
          <div className="bklst" key={index}>
            <Card book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksCatelogue;
