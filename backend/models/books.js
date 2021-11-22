const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
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
      maxlength: 2000,
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
      required: true,
    },
    totalStars: {
      type: Number,
      default: 5,
    },
    totalReviews: {
      type: Number,
      default: 5,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
