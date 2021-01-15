const router = require('express').Router()
const recordController = require('../controller/recordController')

router.get('/', function (req, res) {
  res.json({
    status: 200,
    message: 'working'
  })
})

router.route('/record').post(recordController)

module.exports = router