const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');

app.use(express.json());

app.use('/auth', authRoutes);

app.get('/hello', (req, res) => {
  res.send('Hello, world!');
});

app.post('/sum', (req, res) => {
  const { a, b } = req.body;
  res.json({ sum: a + b });
});

app.post('/invalid', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).send('Invalid input');
  }
  res.json({ sum: a + b });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
module.exports = app; // Export the app for testing purposes