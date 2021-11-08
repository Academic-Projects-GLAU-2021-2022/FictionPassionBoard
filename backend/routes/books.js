const express = require("express");

const { check } = require("express-validator");

const router = express.Router();

const {
  getBookById,
  getBook,
  addBook,
  updateRating,
  countRatings,
} = require("../controllers/books");

//parameter extracter
router.param("bookId", getBookById);

//getting book
router.get("/book/:bookId", getBook);

//for updating ratings
router.put("/book/addRating/:bookId", updateRating);

//counting rating
router.get("/bookRating/:bookId", countRatings);

router.post(
  "/addBook",
  [check("title").not().isEmpty(), check("description").isLength({ min: 10 })],
  addBook
);

module.exports = router;
