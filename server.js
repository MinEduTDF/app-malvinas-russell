var fs = require('fs')
var path = require('path')
var hyperstream = require('hyperstream')
var app = require('./src/app.js')
var store = require('./src/store.js')
var httpProxy = require('http-proxy')
// var proxy = httpProxy.createProxyServer({target: 'http://elmalvinense.com'})
var proxycake = httpProxy.createProxyServer({target: 'http://192.168.1.64'})
var request = require('request')
var oppressor = require('oppressor')
var feedme = require('feedme')
var parser = new feedme(true)

var ecstatic = require('ecstatic')
var st = ecstatic({
  root: path.join(__dirname, 'build'), 
  gzip: true, 
  cache: 3600*24*365,
  headers: {
    'Cache-Control': 'public, max-age=31536000',
    Expires: new Date().setFullYear(new Date().getFullYear() + 1)
  }
})
var st2 = ecstatic({
  root: path.join(__dirname, 'build'), 
  gzip: true,
  cache: 0
})

var http = require('http')

var server = http.createServer(function (req, res) {
  if (req.url.match('manifest.json')) return st(req,res)
  if (req.url.match('service-worker.js')) return st2(req,res)
  if (req.url.match('assets')) return st(req, res)
  if (req.url.match('api')) {
    req.url = '/cake/Web-OvnionPanel-Back' + req.url
    return proxycake.web(req, res)
  }
  if (req.url.match('elmalvinense')) {
    request({encoding: 'binary', url:'http://elmalvinense.com/elmalvinense.xml'})
      .on('data', function (d) {parser.write(d)}) 
      .on('end', function () {parser.end()})
    parser.on('end', function () {res.end(JSON.stringify(parser.done().items))})
    // parser.on('end', function () {
    // res.end()})
    return
  }
  res.setHeader('Content-Type', 'text/html');

  store({type: 'setUrl', payload: req.url})
  var state = store.getState()
  var hyd = JSON.stringify(state)
    var elem =  app(state)
  read('index.html').pipe(hyperstream({
      '#main': elem,
      '#state': {
        _html: "window.state =" + hyd
      }
    })).pipe(oppressor(req)).pipe(res)
})
server.listen(8000)

function read (x) {
  return fs.createReadStream(path.join(__dirname, 'build', x))
}
