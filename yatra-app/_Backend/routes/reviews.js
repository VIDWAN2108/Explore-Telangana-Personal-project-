const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

router.get('/:placeId', async (req, res) => {
  const reviews = await Review.find({ placeId: req.params.placeId });
  res.json(reviews);
});

router.post('/:placeId', async (req, res) => {
  const { rating, comment } = req.body;
  const newReview = new Review({
    placeId: req.params.placeId,
    rating,
    comment
  });
  await newReview.save();
  res.status(201).json(newReview);
});

module.exports = router;
