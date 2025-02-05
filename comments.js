// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Load comments
const comments = require('./comments.json');

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Post a new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Start server
app.listen(3000, () => {
  console.log('Server is listening on http://localhost:3000');
});