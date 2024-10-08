const mongoose = require('mongoose');
const url = process.env.DATABASE_URL || 'mongodb://localhost:27017';

mongoose.connect(url)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...'));