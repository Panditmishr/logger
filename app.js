const express = require('express');
const logger = require('./logger');

const app = express();
const PORT = 4000;

app.use(logger); // Logging middleware

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
