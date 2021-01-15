'use strict'
const mongoose = require('mongoose')
const db = mongoose.connection

require('dotenv').config()

module.exports = async function(){
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  mongoose.connect(process.env.MONGODB_URI, options)
  db.on('error', err => {
    console.log('Error', err)
  })
}