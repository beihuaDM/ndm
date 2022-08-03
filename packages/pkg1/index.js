const lodash = require('lodash')
const { func2 } = require('@ndm/monorepo2')
const axios = require('axios')

const func1 = () => {
  console.log('func1')
  console.log(lodash.chunk([1,2,3,4,5,6,7,8,9], 2))
  func2()
  axios.get('https://www.baidu.com').then(() => {
    setTimeout(() => {
      console.log('百度')
    }, 500);
  })
}

func1()

module.exports = {
  func1
}