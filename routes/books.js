const express = require('express');
const router = express.Router();
const Reviews = require('../models/bookReviews');

router.get('/', async (req, res) => {
  try {
    const reviews = await Reviews.find();
    res.json(reviews);
  } catch (err) {
    res.json({message: err});
  }
});

router.post('/post', (req, res) => {
  const post = new Reviews({
    title: req.body.title,
    url: req.body.url,
    review: req.body.review,
  })
  post.save((err, post) => {
      if (err) {
          return err
      } else res.status(201).json(post)
  }) 
});

module.exports = router;
