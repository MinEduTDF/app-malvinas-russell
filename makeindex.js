var fs = require('fs')

var file = fs.createWriteStream(__dirname + '/build/index.html')
file.end(makeindex(process.argv[2]))
function makeindex (version) {
  return `<html lang='es'><head>
<meta charset="UTF-8">
<!-- Chrome, Firefox OS and Opera -->
<meta name="theme-color" content="#6389c8">
<!-- Windows Phone -->
<meta name="msapplication-navbutton-color" content="#6389c8">
<!-- iOS Safari -->
<meta name="apple-mobile-web-app-capable" content="yes">
<link rel="apple-touch-icon" href="/assets/img/launcher-icon-4x.png">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<link rel="shortcut icon" href="/assets/img/favicon.ico" type="image/x-icon">
<link rel="icon" href="assets/img/favicon.ico" type="image/x-icon">
<link rel="manifest" href="manifest.json">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="application-name" content="Malvinas">
<meta name="apple-mobile-web-app-title" content="Malvinas">
<meta name="msapplication-starturl" content="/">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="google-site-verification" content="FbGcc4Igo8kKLnyGubgLs8dPPihhPP8GS1gPOHnGJi4" />
<link id='css' rel='stylesheet' type='text/css' href='/assets/css/main-${version}.css'>
<title>Malvinas</title>
</head>

<body>
<div id='main'>
      </div>
	<script defer id='bundle' src='/assets/bundle-${version}.js' type='text/javascript'></script>
  <script defer id='state' type='text/javascript'></script>
  <script id='ga2'>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-85242103-2', 'auto');
    ga('send', 'pageview');

    </script>
</body></html>`}
