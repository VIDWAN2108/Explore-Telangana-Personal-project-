const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const placeRoutes = require('./routes/places');
const reviewRoutes = require('./routes/reviews');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/places', placeRoutes);
app.use('/api/reviews', reviewRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}).catch(err => console.log(err));
