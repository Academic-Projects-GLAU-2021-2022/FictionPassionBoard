const uuid = require("uuid/v4");
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");

let DUMMY_BOOKS = [
  {
    id: "b1",
    title: "Let us C",
    description: "A book for learning C Programming Concepts",
  },
];

const getBookById = (req, res, next) => {
  const bookId = req.params.bid; // for book id {bid refers to b1}

  const book = DUMMY_BOOKS.find((b) => {
    return b.id === bookId;
  });

  if (!book) {
    throw new HttpError("Could not find a book for the provided id.", 404);
  }

  res.json({ book }); //it refers to the complete book object
};
