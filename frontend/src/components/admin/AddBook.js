import React, { useState, useEffect } from "react";
import { addBook } from "./helper/adminapicall";
import "./AddBook.css";
import image from "./images/form-image.jpg";

const AddBook = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [values, setValues] = useState({
    title: "",
    description: "",
    author: "",
    publication: "",
    totalStars: "",
    totalReviews: "",
    photo: "",
    addedBook: "",
    formData: new FormData(),
  });

  const {
    title,
    description,
    author,
    publication,
    totalReviews,
    totalStars,
    addedBook,
    photo,
    formData,
  } = values;

  const preload = () => {
    setValues({ ...values });
  };

  useEffect(() => {
    preload();
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    setValues({
      ...values,
      error: false,
      loading: true,
      success: false,
      addedBook: false,
    });
    // console.log("formdata", formData);
    //console.log();
    //console.log("END");
    addBook(formData)
      .then((data) => {
        //console.log(data);
        if (data.error) {
          setError(true);
          setSuccess("");
          setValues({
            ...values,
            addedBook: false,
          });
        } else {
          setSuccess(true);
          setValues({
            ...values,
            title: "",
            description: "",
            author: "",
            publication: "",
            photo: "",
            loading: false,
            addedBook: true,
          });
        }
      })
      .catch(() => {
        return { error: true };
      });
  };

  const handleChange = (name) => (event) => {
    setError("");
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const successMessage = () => {
    if (success) {
      return (
        <div
          style={{
            display: success ? "" : "none",
            color: "green",
            paddingLeft: "8vw",
            paddingBottom: "2vw",
          }}
        >
          <h4>
            <i className="fa fa-check-circle"></i> Book added successfully.
          </h4>
        </div>
      );
    }
  };

  const errorMessage = () => {
    if (error) {
      return (
        <div
          style={{
            display: error ? "" : "none",
            color: "red",
            paddingLeft: "8vw",
            paddingBottom: "2vw",
          }}
        >
          <h4>
            <i className="fa fa-exclamation-triangle"></i> Failed to add book.
            Provide all the fields.
          </h4>
        </div>
      );
    }
  };

  const addBookForm = () => (
    <div className="addbook__form-container">
      <div className="main-form">
        <div className="main-formHeading">
          Add a Book <i className="fas fa-book-reader"></i>
        </div>
        <form>
          <div className="addBook__form">
            <label>Upload image</label>
            <input
              onChange={handleChange("photo")}
              type="file"
              name="photo"
              required
            />
          </div>
          <div>
            <label>Title</label>
            <input
              onChange={handleChange("title")}
              type="text"
              name="title"
              className="form-control"
              placeholder="Book Name"
              value={title}
              required
            />
          </div>
          <div>
            <label>Description</label>
            <input
              onChange={handleChange("description")}
              type="text"
              name="description"
              className="form-control"
              placeholder="Book Description"
              value={description}
              required
            />
          </div>
          <div>
            <label>Author</label>
            <input
              onChange={handleChange("author")}
              type="text"
              name="author"
              className="form-control"
              placeholder="Auhtor name"
              value={author}
              required
            />
          </div>
          <div>
            <label>Publication</label>
            <input
              onChange={handleChange("publication")}
              type="text"
              name="publication"
              className="form-control"
              placeholder="Name of Publication"
              value={publication}
              required
            />
          </div>
          <button type="submit" onClick={onSubmit}>
            Add Book
          </button>
        </form>
      </div>
      <div className="form-image">
        <img src={image} />
      </div>
    </div>
  );

  return (
    <div className="addbook-container">
      <div>
        {addBookForm()}
        {successMessage()}
        {errorMessage()}
      </div>
    </div>
  );
};

export default AddBook;
