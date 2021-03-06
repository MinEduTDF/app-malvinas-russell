// var toolbox = require('sw-toolbox')
// toolbox.options.debug = true
// module.exports = function (self) {
// self.addEventListener('install', function (event) {
// })
//   self.addEventListener('install',
//       function (event) {
//         event.waitUntil(self.skipWaiting())
// })
//   self.addEventListener('activate',
//       function (event)  {
// console.log('activated')
// event.waitUntil(self.clients.claim())
// toolbox.precache(['assets/css/style.css', 'assets/img/malvinas.jpg'])
// })
// }
;(global => {
  'use strict'

  // Load the sw-tookbox library.
  importScripts('assets/js/sw-toolbox.js')

  // Turn on debug logging, visible in the Developer Tools' console.
  // global.toolbox.options.debug = true

  // Set up a handler for HTTP GET requests:
  // - /\.ytimg\.com\// will match any requests whose URL contains 'ytimg.com'.
  //   A narrower RegExp could be used, but just checking for ytimg.com anywhere
  //   in the URL should be fine for this sample.
  // - toolbox.cacheFirst let us to use the predefined cache strategy for those
  //   requests.
  // global.toolbox.router.get(/\.ytimg\.com\//, global.toolbox.cacheFirst, {
  //   // Use a dedicated cache for the responses, separate from the default cache.
  //   cache: {
  //     name: 'youtube-thumbnails',
  //     // Store up to 10 entries in that cache.
  //     maxEntries: 10,
  //     // Expire any entries that are older than 30 seconds.
  //     maxAgeSeconds: 30
  //   }
  // })

  toolbox.precache([
    'index.html',
    'assets/bundle.js',
    'assets/css/style.css',
    'assets/css/main.css',
    'assets/img/malvinas.jpg'
  ])
  // By default, all requests that don't match our custom handler will use the
  // toolbox.networkFirst cache strategy, and their responses will be stored in
  // the default cache.
  global.toolbox.router.get('/elmalvinense', global.toolbox.networkFirst)
  global.toolbox.router.default = global.toolbox.cacheFirst

  // Boilerplate to ensure our service worker takes control of the page as soon
  // as possible.
  global.addEventListener('install',
    event => event.waitUntil(global.skipWaiting()))
  global.addEventListener('activate',
    event => event.waitUntil(global.clients.claim()))
})(self)
