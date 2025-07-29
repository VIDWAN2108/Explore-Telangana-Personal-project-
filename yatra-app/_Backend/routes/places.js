const express = require('express');
const router = express.Router();
const Place = require('../models/Place');

router.get('/', async (req, res) => {
  const search = req.query.search || '';
  const query = {
    $or: [
      { name: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } }
    ]
  };
  const places = await Place.find(query);
  res.json(places);
});

router.get('/:id', async (req, res) => {
  const place = await Place.findById(req.params.id);
  res.json(place);
});

router.post('/', async (req, res) => {
  const place = new Place(req.body);
  await place.save();
  res.status(201).json(place);
});

module.exports = router;
