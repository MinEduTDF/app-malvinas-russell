var work = require('webworkify')
var worker = work(require('./worker.js'))
URL.revokeObjectURL(worker.objectURL);
var morphdom = require('morphdom')
var nT = requestAnimationFrame
var localLinks = require('local-links')

/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-env browser */
'use strict';

if ('serviceWorker' in navigator) {
  // Your service-worker.js *must* be located at the top-level directory relative to your site.
  // It won't be able to control pages unless it's located at the same level or higher than them.
  // *Don't* register service worker file in, e.g., a scripts/ sub-directory!
  // See https://github.com/slightlyoff/ServiceWorker/issues/468
  navigator.serviceWorker.register('service-worker.js').then(function(reg) {
    // updatefound is fired if service-worker.js changes.
    reg.onupdatefound = function() {
      // The updatefound event implies that reg.installing is set; see
      // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
      var installingWorker = reg.installing;

      installingWorker.onstatechange = function() {
        switch (installingWorker.state) {
          case 'installed':
            if (navigator.serviceWorker.controller) {
              // At this point, the old content will have been purged and the fresh content will
              // have been added to the cache.
              // It's the perfect time to display a "New content is available; please refresh."
              // message in the page's interface.
              window.alert('New or updated content is available.');
              // worker.postMessage({type: 'flash', payload: 'Hay disponible nuevo contenido!'})
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a "Content is cached for offline use." message.
              window.alert('Content iis now available offline!');
            // worker.postMessage({type: 'flash', payload: 'Listo para trabajar offline!'})
            }
            break;

          case 'redundant':
            console.error('The installing service worker became redundant.');
            break;
        }
      };
    };
  }).catch(function(e) {
    console.error('Error during service worker registration:', e);
  });
}

var el = document.getElementById('main')

var url
worker.onmessage = function onmsg(ev) {
  url = ev.data.url
  
nT( function render() { 
if (location.pathname !== url) {
    history.pushState(null, null, url)
  }
  morphdom(el, ev.data.view)
})
}
window.addEventListener('deviceorientationabsolute', function (o) {
  worker.postMessage({type: 'deviceorientation', payload: o.alpha})
})
// if ("geolocation" in navigator) {
    /* geolocation is available */

// }
// else {
//     [> geolocaiton IS NOT available <]
// }
window.addEventListener('popstate', function () {
  worker.postMessage({type: 'setUrl', payload: location.pathname.toString()})
})

function changeWidth() {
  worker.postMessage({type: 'changeWidth', payload: window.innerWidth})
}
window.addEventListener('resize', changeWidth)
window.addEventListener('load', function () {
  worker.postMessage({type: 'hydrate', payload: window.state})
  changeWidth()
  navigator.geolocation.watchPosition(function (p) {
    worker.postMessage(
      {type: 'position', payload: {lat: p.coords.latitude, lng: p.coords.longitude}})
  })
  // worker.postMessage({type: 'setUrl', payload: location.pathname.toString()})
})


document.body.addEventListener('click', function (event) {
  var pathname = localLinks.getLocalPathname(event)
  if (pathname) {
    event.preventDefault()
    return worker.postMessage({type: 'setUrl', payload: pathname})
  }

  if (!event.target.dataset || !event.target.dataset.type) {
    return worker.postMessage({type: 'closeMenu'})
  }
  var click = event.target['dataset'].type //JSON.parse(event.target['dataset'].click)
  if (click) {
    event.preventDefault()
    return worker.postMessage({type: click, payload: event.target.dataset.payload})
  }
})
