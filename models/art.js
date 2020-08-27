const mongoose = require('mongoose')

const ArtSchema = {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: false,
    },
    likes: {
      type: Number,
      required: false,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  };
  
  module.exports = mongoose.model('art', ArtSchema);
  