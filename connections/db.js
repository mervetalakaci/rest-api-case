'use strict'
const mongoose = require('mongoose')
const db = mongoose.connection

require('dotenv').config()

module.exports = async function(){
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    poolSize: 10,
    serverSelectionTimeoutMS: 5000, 
    socketTimeoutMS: 45000, 
    family: 4 
  }
  mongoose.connect(process.env.MONGODB_URI, options)
  db.on('error', err => {
    console.log('Error', err)
  })
  db.once('open', function() {
    console.log('connectted to mongodb')
  })
}