const express = require('express');
const path = require('path');
const { inputCleaner, inputValidator } = require('./middleware');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.redirect('/form');
});

app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/submit', inputCleaner, inputValidator, (req, res) => {
  const { username, comment } = req.body;
  res.json({ username, comment });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});