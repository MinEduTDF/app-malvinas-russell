var fs = require('fs')
var path = require('path')
var hyperstream = require('hyperstream')
var app = require('./src/app.js')
var store = require('./src/store.js')
var httpProxy = require('http-proxy')
// var proxy = httpProxy.createProxyServer({target: 'http://elmalvinense.com'})
var proxycake = httpProxy.createProxyServer({target: 'http://192.168.1.64'})
var request = require('request')

var ecstatic = require('ecstatic')
var st = ecstatic(path.join(__dirname, 'build'))

var http = require('http')

var server = http.createServer(function (req, res) {
  if (req.url.match('sw.js')) return st(req,res)
  if (req.url.match('assets')) return st(req, res)
  if (req.url.match('api')) {
    req.url = '/cake/Web-OvnionPanel-Back' + req.url
    return proxycake.web(req, res)
  }
  if (req.url.match('elmalvinense')) {
    return request('http://elmalvinense.com/elmalvinense.xml').pipe(res) 
  }
  store({type: 'setUrl', payload: req.url})
  var state = store.getState()
  var hyd = JSON.stringify(state)
    var elem =  app(state)
  read('index.html').pipe(hyperstream({
      '#main': elem,
      '#state': {
        _html: "window.state =" + hyd
      }
    })).pipe(res)
})
server.listen(8000)

function read (x) {
  return fs.createReadStream(path.join(__dirname, 'build', x))
}
