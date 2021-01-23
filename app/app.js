const express = require('express');
const numberToRomanNumerals = require('../utils/numberToRomanNumerals');
const app = express();

app.get('/romannumeral', (req, res) => {
  if (isNaN(parseInt(req.query.query)) || parseInt(req.query.query) === 0 || parseInt(req.query.query) > 2200000000) {
    res.status(400).send('query paramater needs to be an integer greater than 0 and less than 2200000000');
    return;
  }
  res.send(numberToRomanNumerals(parseInt(req.query.query)))
})

module.exports = app
