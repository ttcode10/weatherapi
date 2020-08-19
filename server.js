const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json({extended: false}));

app.get('/api', (req, res) => {
  res.send('API running');
});

app.use('/api/weather', require('./routes/api/weather'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
