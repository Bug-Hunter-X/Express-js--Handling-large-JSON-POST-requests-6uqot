const express = require('express');
const app = express();

// Increased body-parser limit to handle larger JSON payloads
app.use(express.json({ limit: '10mb' }));

app.post('/users', (req, res) => {
  const user = req.body;
  // ... process user data ...
  res.status(201).json({ message: 'User created' });
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});