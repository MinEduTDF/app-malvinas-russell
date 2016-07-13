var http = require('http')
var store = require('../store.js')
var feedme = require('feedme')
var parser = new feedme(true)

var options = {
  hostname: 'localhost',
  port: 8000,
  path: '/elmalvinense',
  method: 'GET'
};

var req = http.request(options, (res) => {
  // console.log(`STATUS: ${res.statusCode}`);
  // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.pipe(parser).on('end', function () {
    parser.done().items.forEach(function (item){store({type: 'news', payload: item})})})
  })

req.on('error', (e) => {
  console.log(`problem with request: ${e.message}`);
});

module.exports = function () { return req.end(); }
