var fs = require('fs')
var path = require('path')
var xtend = require('xtend')
var hyperstream = require('hyperstream')
var app = require('./src/app.js')
var store = require('./src/store.js')

var ecstatic = require('ecstatic')
var st = ecstatic(path.join(__dirname, 'build'))

var http = require('http')

var server = http.createServer(function (req, res) {
  var state = store.getState()
  if (!app(xtend(state, {url: req.url}))) return st(req, res)
    var elem =  app(xtend(state, {url: req.url}))
  read('index.html').pipe(hyperstream({
      '#content': elem.toString()
    })).pipe(res)
})
server.listen(8000)

function read (x) {
  return fs.createReadStream(path.join(__dirname, 'build', x))
}
