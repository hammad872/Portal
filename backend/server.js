require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

// Connect to MongoDB using the environment variable
const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
  console.error('MongoDB connection string is missing. Please check your .env file.');
  process.exit(1);
}

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
