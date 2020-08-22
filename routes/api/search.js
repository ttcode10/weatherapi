const express = require('express');
const axios = require('axios');

const cityList = require('./../../utils/city.list.json');

const router = express.Router();

const app = express();
app.use(express.json());

router.get('/', (req, res) => {
  const { name } = req.query;
  try {
    const filtered = cityList.filter(item => item.name.toLowerCase().match(name.toLowerCase()));
    if (!!filtered) {
      const sliced = filtered.slice(0, 10);
      return res.status(200).json(sliced);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

module.exports = router;
