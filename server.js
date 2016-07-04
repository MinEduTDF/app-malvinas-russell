var fs = require('fs')
var path = require('path')
var xtend = require('xtend')
var hyperstream = require('hyperstream')
var app = require('./src/app.js')
var store = require('./src/store.js')()

var ecstatic = require('ecstatic')
var st = ecstatic(path.join(__dirname, 'build'))

var http = require('http')

var server = http.createServer(function (req, res) {
  if (req.url.match('assets')) return st(req, res)
  var state = store({type: 'setUrl', payload: req.url})
    var elem =  app(state)
  read('index.html').pipe(hyperstream({
      '#main': elem
    })).pipe(res)
})
server.listen(8000)

function read (x) {
  return fs.createReadStream(path.join(__dirname, 'build', x))
}
