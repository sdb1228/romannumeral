const express = require('express');
const numberToRomanNumerals = require('./utils/numberToRomanNumerals');
const app = express()
const port = 8080

app.get('/romannumeral', (req, res) => {
  res.send(numberToRomanNumerals(req.query.query))
})

app.listen(port, () => {
  console.log(`roman numeral converter listing at http://localhost:${port}`)
})
