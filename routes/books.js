const express = require('express');
const router = express.Router();
const Books = require('../models/books');

router.get('/', async (req, res) => {
  try {
    const books = await Books.find();
    res.json(books);
  } catch (err) {
    res.json({message: err});
  }
});

router.post('/post', (req, res) => {
  const post = new Books({
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
