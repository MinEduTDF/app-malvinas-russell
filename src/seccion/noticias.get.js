var request = require('request')
var store = require('../store.js')

module.exports = function getnews() { 
  console.log('geting news')
    // store({type: 'getingNews', payload: true})
    request('http://localhost:8000/elmalvinense', function (err, res, body) {
      if (err) return console.log(err)
      console.log(body)
      store({type: 'news', payload: JSON.parse(body)})
      // store({type: 'getingNews', payload: false})
      return
  })
}
