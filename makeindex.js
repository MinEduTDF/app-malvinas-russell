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
<link rel="stylesheet" href="assets/css/style.css">
<link rel="stylesheet" href="assets/css/main.css">
<title>Malvinas</title>
</head>


<body>
<div id='main'>
      </div>
	<script defer src='assets/bundle-${version}.js' type='text/javascript'></script>
  <script id='state' type='text/javascript'></script>
</body></html>`}
