var fs = require('fs')
var path = require('path')
var hyperstream = require('hyperstream')
var app = require('./src/app.js')
var store = require('./src/store.js')
var httpProxy = require('http-proxy')
var proxy = httpProxy.createProxyServer({target: 'http://elmalvinense.com'})
var request = require('request')

var ecstatic = require('ecstatic')
var st = ecstatic(path.join(__dirname, 'build'))

var http = require('http')

var server = http.createServer(function (req, res) {
  if (req.url.match('assets')) return st(req, res)
  if (req.url.match('api')) {
    req.url = req.url.split('/').pop()
    return proxy.web(req, res)
  }
  if (req.url.match('elmalvinense')) {
    return request('http://elmalvinense.com/elmalvinense.xml').pipe(res) 
  }
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
