var mongoose = require("mongoose");

var bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 100,
      trim: true,
    },
    author: {
      type: String,
      maxlength: 32,
      required: true,
      trim: true,
    },
    publication: {
      type: String,
      maxlength: 50,
      trim: true,
    },
    totalStars: {
      type: Number,
      default: 5,
    },
    totalReviews: {
      type: Number,
      default: 5,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
