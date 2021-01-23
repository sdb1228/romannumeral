const app = require('./app/app.js')
const port = 8080

app.listen(port, () => {
  console.log(`roman numeral converter listing at http://localhost:${port}`)
})
