const express = require('express')
const app = express()
const connectDB = require('../connections/db')

connectDB()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log('Server listening on port '+ process.env.PORT)
})