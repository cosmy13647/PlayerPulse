const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let players = [];

app.get('/players', (req, res) => {
  res.json(players);
});

app.post('/players', (req, res) => {
  const newPlayer = req.body;
  players.push(newPlayer);
  res.status(201).json(newPlayer);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
