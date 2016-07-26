var http = require('http')
var store = require('../store.js')
var feedme = require('feedme')
var parser = new feedme(true)
var noticias = require('./noticias.js')

module.exports = function getnews(state) { 
  if (state.news.length !== 0) return noticias(state)
var options = {
  hostname: 'localhost',
  port: 8000,
  path: '/elmalvinense',
  method: 'GET'
};

var req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('binary');
  res.pipe(parser).on('end', function () {
    var items = parser.done().items
    return store({type: 'news', payload: items})
    
    // parser.done().items.forEach(function (obj) {return store({type: 'news', payload: obj})})
  })
})
req.on('error', (e) => {
  console.log(`problem with request: ${e.message}`);
});
req.end()
return noticias(store.getState())}
