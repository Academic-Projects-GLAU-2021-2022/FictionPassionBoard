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
