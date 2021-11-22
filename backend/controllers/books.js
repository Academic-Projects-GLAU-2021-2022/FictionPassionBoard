const Book = require("../models/books");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const uuid = require("uuid/v4");
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
//for fetching a book from db
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
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "problem with image",
      });
    }
    //destructure the fields
    const { title, description, author, publication } = fields;

    if (!title || !description || !author || !publication) {
      return res.status(400).json({
        error: "Please include all fields",
      });
    }

    let book = new Book(fields);

    //handle file here
    if (file.photo) {
      if (file.photo.size > 3000000) {
        //3000000 = approx. 3MB
        return res.status(400).json({
          error: "File size too big",
        });
      }
      book.photo.data = fs.readFileSync(file.photo.path);
      book.photo.contentType = file.photo.type;
    }

    //save to the DB
    book.save((err, book) => {
      if (err) {
        return res.status(400).json({
          error: "Saving book in DB failed",
        });
      }
      //console.log(book);
      res.json({
        title: book.title,
        description: book.description,
        author: book.author,
        publication: book.publication,
        _id: book._id,
      });
    });
  });
};

//
//Updating ratings
//
exports.updateRating = (req, res, id) => {
  //req.book.totalStars += req.body.stars;
  //req.book.totalReviews += 1;
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
