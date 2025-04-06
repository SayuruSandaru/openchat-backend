const express  = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({success: true, message: 'Server is running' });
});

module.exports = app;