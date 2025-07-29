const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: String,
  description: String,
  bestTimeToVisit: String,
  timings: String,
  image: String,
  location: {
    lat: Number,
    lng: Number
  }
});

module.exports = mongoose.model('Place', placeSchema);
