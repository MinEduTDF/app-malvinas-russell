var http = require('http')
var store = require('./store.js')
var JSONStream = require('JSONStream')

var options = {
  hostname: 'localhost',
  port: 8000',
  path: '/api',//la ruta tiene que incluir api en algun lado
  method: 'GET',
  headers: {
  }
};

var req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.pipe(JSONStream.parse('*')).on('data', (obj) => {
    console.log(obj)
    return store({type: 'milestones', payload: {title: obj.title,open_issues: obj.open_issues,close_issues: obj.closed_issues
}})
  });
  res.on('end', () => {
    console.log('No more data in response.')
  })
});

req.on('error', (e) => {
  console.log(`problem with request: ${e.message}`);
});

module.exports = function () { return req.end(); }
