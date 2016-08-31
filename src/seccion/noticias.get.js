var request = require('request')
var store = require('../store.js')
var noticias = require('./noticias.js')

module.exports = function getnews(state) { 
  if (state.news.length !== 0) return noticias(state)
return request('http://localhost:8000/elmalvinense', (err, res, body) => {
if (err) return console.log(err)
    store({type: 'news', payload: JSON.parse(body)})
})
}
