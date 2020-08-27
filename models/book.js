const mongoose = require('mongoose');

const ReviewsSchema = {
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
};

module.exports = mongoose.model('reviews', ReviewsSchema)
