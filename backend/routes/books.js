const express = require("express");

const { check } = require("express-validator");

const router = express.Router();

const {
  getBookById,
  getBook,
  addBook,
  updateRating,
  photo,
  getAllBooks,
} = require("../controllers/books");

//parameter extracter
router.param("bookId", getBookById);

//getting book
router.get("/book/:bookId", getBook);
router.get("/book/photo/:bookId", photo);

//for updating ratings
router.put("/book/addRating/:bookId", updateRating);

//counting rating
//router.get("/bookRating/:bookId", countRatings);

router.post(
  "/addBook",
  [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  addBook
);

//listing route
router.get("/allBooks", getAllBooks);

module.exports = router;
