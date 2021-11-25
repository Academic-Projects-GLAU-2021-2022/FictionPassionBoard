import React, { useState, useEffect } from "react";
import { addBook } from "./helper/adminapicall";
import "./AddBook.css";

const AddBook = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    author: "",
    publication: "",
    totalStars: "",
    totalReviews: "",
    photo: "",
    loading: false,
    error: "",
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
    loading,
    error,
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
    setValues({ ...values, error: false, loading: true, addedBook: false });
    console.log("formdata", formData);
    console.log();
    console.log("END");
    addBook(formData).then((data) => {
      console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error, addedBook: false });
      } else {
        setValues({
          ...values,
          title: "",
          description: "",
          author: "",
          publication: "",
          photo: "",
          loading: false,
          error: "",
          addedBook: true,
        });
      }
    });
  };

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const addBookForm = () => (
    <form>
      <span>Add Book</span>
      <div className="addBook__form">
        <label>Upload image</label>
        <input
          onChange={handleChange("photo")}
          type="file"
          name="photo"
          placeholder="choose a file"
        />
      </div>
      <div>
        <label>Title</label>
        <input
          onChange={handleChange("title")}
          type="text"
          name="title"
          className="form-control"
          placeholder="Name"
          value={title}
        />
      </div>
      <div>
        <label>Description</label>
        <input
          onChange={handleChange("description")}
          type="text"
          name="description"
          className="form-control"
          placeholder="Description"
          value={description}
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
        />
      </div>
      <div>
        <label>Publication</label>
        <input
          onChange={handleChange("publication")}
          type="text"
          name="publication"
          className="form-control"
          placeholder="Publication"
          value={publication}
        />
      </div>
      <button type="submit" onClick={onSubmit}>
        Add Book
      </button>
    </form>
  );

  return (
    <div>
      <div>{addBookForm()}</div>
    </div>
  );
};

export default AddBook;
