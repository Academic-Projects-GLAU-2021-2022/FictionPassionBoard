const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,

      trim: true,
    },
    description: {
      type: String,
      required: true,

      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    publication: {
      type: String,
      trim: true,
      required: true,
    },
    totalStars: {
      type: Number,
      default: 17,
    },
    totalReviews: {
      type: Number,
      default: 8,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
