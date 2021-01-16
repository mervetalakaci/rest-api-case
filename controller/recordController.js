const Record = require('../model/recordModel')
module.exports = async function (req, res) {
  console.log('fonksiyon çalıştı', req.body)
  try{
    const validateStartDate = isValidDate(req.body.startDate)
    const validateEndDate =  isValidDate(req.body.endDate)
    if(validateEndDate && validateStartDate){
      if(req.body.startDate > req.body.endDate){
        res.status(400).send({
          'code': 1,
          'msg': 'The end date cannot be before the start date',
          'records': null
        })
      }
      if(req.body.minCount > req.body.maxCount){
        res.status(400).send({
          'code': 2,
          'msg': 'The minCount cannot be greater than maxCount',
          'records': null
        })
      }
      else{
        let data = await Record.aggregate([
          {
            '$project': {
              'key': '$key',
              'createdAt': '$createdAt',
              'totalCount': { '$sum': '$counts' }
            }
          },
          {
            '$match': {
              '$and': [
                {
                  'createdAt':
                              {
                                '$gt': new Date(req.body.startDate),
                                '$lt': new Date(req.body.endDate)
                              }
                },
                {   'totalCount':
                              {
                                '$gt': parseInt(req.body.minCount),
                                '$lt': parseInt(req.body.maxCount)
                              }
                }
              ]
            }
          }
        ]).exec()
        if(data.length > 0)
          res.status(200).send({
            'code': 0,
            'msg': 'success',
            'records': data
          })
        else
          res.status(200).send({
            'code': 3,
            'msg': 'no results found try different search selection',
            'records': null
          })
      }
    }
    else
    {
      res.status(400).send({
        'code': 4,
        'msg': 'wrong date format',
        'records': null
      })
    }
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

function isValidDate(dateString) {
  const regEx = /^\d{4}-\d{2}-\d{2}$/
  if(!dateString.match(regEx)) 
    return false
  const d = new Date(dateString)
  const dNum = d.getTime()
  if(!dNum && dNum !== 0) 
    return false
  return d.toISOString().slice(0,10) === dateString
}