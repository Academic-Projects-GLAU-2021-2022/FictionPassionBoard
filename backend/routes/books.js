const express = require("express");

const { check } = require("express-validator");

const router = express.Router();

const booksControllers = require("../controllers/books");

router.get("/:bid", booksControllers.getBookById);

router.post(
  "/",
  [check("title").not().isEmpty(), check("description").isLength({ min: 10 })],
  booksControllers.createBook
);

module.exports = router;
