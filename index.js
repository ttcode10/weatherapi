const express = require('express');
const app = express();
const port = 3000;

app.use(express.json({extended: false}));

app.get('/', (req, res) => {
  res.send('API running');
});

app.use('/weather', require('./routes/weather'));

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
})
