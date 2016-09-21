var request = require('request')
var store = require('../store.js')

module.exports = function getnews() { 
    // store({type: 'getingNews', payload: true})
    request('https://nuestrasmalvinas.org/elmalvinense', function (err, res, body) {
      if (err) return console.log(err)
      store({type: 'news', payload: JSON.parse(body)})
      // store({type: 'getingNews', payload: false})
      return
  })
}
