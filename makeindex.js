var fs = require('fs')

var file = fs.createWriteStream(__dirname + '/build/index.html')
file.end(makeindex(process.argv[2]))
function makeindex (version) {
return `<html><head>
<meta charset="UTF-8">
<!-- Chrome, Firefox OS and Opera -->
<meta name="theme-color" content="#6389c8">
<!-- Windows Phone -->
<meta name="msapplication-navbutton-color" content="#6389c8">
<!-- iOS Safari -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon">
<link rel="icon" href="assets/img/favicon.ico" type="image/x-icon">
<link rel="manifest" href="manifest.json">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="application-name" content="Malvinas">
<meta name="apple-mobile-web-app-title" content="Malvinas">
<meta name="msapplication-starturl" content="/">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style type='text/css'>* {
  margin: 0;
  padding: 0;
}

*, *:before, *:after {
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

body {
  font: 12px/1 'Montserrat', sans-serif;
  color: #333;
  background: #eaeaea;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

/* Demo Description */
h1 {
    background-color: #e0e0e0;
    padding: 20px;
    color: #565656;
    font-weight: 400;
}

h2 {
  font-size: 18px;
  font-weight: 400;
  color: #999;
}
</style>
<title>Malvinas</title>
</head>


<body>
<div id='main'>
      </div>
	<script defer src='assets/bundle-${version}.js' type='text/javascript'></script>
  <script id='state' type='text/javascript'></script>
</body></html>`}
