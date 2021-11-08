const Book = require("../models/books");
const uuid = require("uuid/v4");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");
const { validationResult } = require("express-validator");

//
//for getting books by ID
//
exports.getBookById = (req, res, next, id) => {
  Book.findById(id).exec((err, book) => {
    if (err || !book) {
      return res.status(400).json({
        error: "No book was found in DB",
      });
    }
    req.book = book;
    next();
  });
};

//
//to get a book
//
exports.getBook = (req, res) => {
  req.book.createdAt = undefined;
  req.book.updatedAt = undefined;
  req.book.__v = undefined;
  res.json(req.book);
};

//
//for adding a new book
//

exports.addBook = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  const addedBook = new Book(req.body);
  addedBook.save((err, addedBook) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        err: "NOT able to save book in DB",
      });
    }
    res.json({
      title: addedBook.title,
      description: addedBook.description,
      author: addedBook.author,
      publication: addedBook.publication,
      _id: addedBook._id,
    });
  });
};

//
//Updating ratings
//
exports.updateRating = (req, res, id) => {
  console.log(req.book);
  Book.findOne({ id: req._id }, () => {
    req.book.totalStars += req.body.stars;
    req.book.totalReviews += 1;
    req.book.save((err, book) => {
      if (err || !book) {
        console.log(err);
        return res.status(400).json({
          error: "Unable to update ratings",
        });
      }
      res.json({ book });
    });
  });
};

//
//counting ratings
//
exports.countRatings = (req, res, id) => {
  var totalStars = req.book.totalStars;
  var totalReviews = req.book.totalReviews;

  var avgStars = totalStars / totalReviews;

  res.json(avgStars);
};
