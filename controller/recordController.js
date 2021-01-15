const Record = require('../model/recordModel')
module.exports = async function (req, res) {
  console.log('fonksiyon çalıştı', req.body)
  try{
    Record.find({}, function (err, data) { 
      if (err){ 
        console.log(err) 
      } 
      else{ 
        console.log('First function call : ', data) 
      } 
    }) 
  }
  catch(err){
    console.log(err)
    res.status(500).send({
      'code': 500,
      'msg': err,
      'records': null
    })
  }
}