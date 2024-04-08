const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;

const data = {
  name: 'inderjit kaur' 
}

app.get('/', (req, res) => {
  res.send('hi Everyone');
});

app.get('/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`example app listening on the port ${port}`);
});

