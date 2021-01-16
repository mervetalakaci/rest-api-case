/* eslint-disable no-undef */
const recordController = require('./controller/recordController')
test('test suite for recordController', () => {
  const recordObj= {
    startDate: '2016-01-26',
    endDate: '2018-02-02',
    minCount: 2700,
    maxCount: 3000
  }
  recordController(recordObj)
    .then(result => {
      expect(result.code).toEqual(0)
      expect(result.msg).toEqual('success')
      expect(result.records.length).toBeGreaterThan(0)
    })
})