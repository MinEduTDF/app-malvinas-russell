var request = require('request')
var store = require('../store.js')
var noticias = require('./noticias.js')

module.exports = function getnews(state) { 
  if (state.news.length !== 0 || state.getingNews === true) {
    return noticias(state)
  } else {
    store({type: 'getingNews', payload: true})
    request('http://malvinas.ovnion.com/elmalvinense', function (err, res, body) {
      if (err) return console.log(err)
      store({type: 'news', payload: JSON.parse(body)})
      store({type: 'getingNews', payload: false})
      return noticias(state)
  })
}
}
