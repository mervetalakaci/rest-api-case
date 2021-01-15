const express = require('express')
const app = express()
const connectDB = require('../connections/db')
const routes = require('../routes/api')
const bodyParser = require('body-parser')

connectDB()

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use('/api', routes)

app.post('/list', function (req, res) {
  res.send('POST request to the homepage')
})

app.listen(process.env.PORT, () => {
  console.log('Server listening on port '+ process.env.PORT)
})