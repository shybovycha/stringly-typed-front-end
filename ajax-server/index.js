const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ 'hello': 'cześć', 'world': 'świat' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
