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

var ecstatic = require('ecstatic')
var st = ecstatic({
  root: path.join(__dirname, 'build'),
  gzip: true,
  cache: 3600 * 24 * 365,
  headers: {
    'Cache-Control': 'public, max-age=31536000',
    Expires: new Date().setFullYear(new Date().getFullYear() + 1)
  }
})
var st2 = ecstatic({
  root: path.join(__dirname, 'build'),
  gzip: true,
  cache: 0,
  headers: {
    'Cache-Control': 'no-cache'
  }
})

var http = require('http')

var server = http.createServer(function (req, res) {
  if (req.url.match('manifest.json')) return st(req, res)
  if (req.url.match('service-worker.js')) return st2(req, res)
  if (req.url.match('assets')) return st(req, res)
  if (req.url.match('api')) {
    req.url = '/cake/Web-OvnionPanel-Back' + req.url
    return proxycake.web(req, res)
  }
  if (req.url.match('elmalvinense')) {
    var parser = new feedme(true)
    request({encoding: 'binary', url: 'http://elmalvinense.com/elmalvinense.xml'})
      .on('data', function (d) {parser.write(d)})
      .on('end', function () {parser.end()})
      .on('error', function (err) {console.log(err)})
    return parser.on('end', function () {return res.end(JSON.stringify(parser.done().items))})
    // parser.on('end', function () {
    // res.end()})

  }
  store({type: 'setUrl', payload: req.url})
  // if (req.url.match('/noticias')) {
  //  request('http://localhost:8000/elmalvinense', function (req, res, body) {
  //    var payload = JSON.parse(body)
  //   store({type: 'news', payload: payload}) 

  //   return render(store.getState())
  //   })
  // }
  return render(store.getState())
  function render (state) {
  var nonce = Math.random().toString().split('.')[1]
    res.setHeader('Content-Type', 'text/html; charset=UTF-8')
    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('Max-Age', '0')
    res.setHeader('Expires', Date.now())
    res.setHeader('X-XSS-Protection', '1; mode=block')
    res.setHeader('X-Frame-Options', 'DENY')
    res.setHeader('X-Content-Type-Options', 'nosniff')
    // res.setHeader('Content-Security-Policy', "object-src 'none'; script-src 'nonce-" + nonce + "' 'unsafe-inline' 'strict-dynamic' https: ;")

    // var state = store.getState()
    var hyd = JSON.stringify(state)
    var elem = app(state)
    read('index.html').pipe(hyperstream({
      '#main': {
        _appendHtml: elem
      },
      '#state': {
        _html: 'window.state =' + hyd,
        nonce: {append: nonce}
       }//,
     //  '#css': {
     //    nonce: {append: nonce}
     //  },
     //   '#w': {
     //    nonce: {append: nonce}
     //  },
     // '#bundle': {
     //    nonce: {append: nonce}
     //  },
     //  '#ga2': {
     //    nonce: {append: nonce}
     //  }
    })).pipe(oppressor(req)).pipe(res)
  }
})
server.listen(8000)

function read (x) {
  return fs.createReadStream(path.join(__dirname, 'build', x))
}
