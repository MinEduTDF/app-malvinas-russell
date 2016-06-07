var csjs = require('csjs');
module.exports = function () {
  return csjs`


.wrapper {
  display: flex;
  min-height: 100%;
}

.sidebar {
  position: absolute;
  width: 220px;
}

.content {
  flex: 1;
  padding: 30px;
  background: #eee;
  box-shadow: 0 0 5px black;
  transform: translate3d(0, 0, 0);
  transition: transform .3s;
}

.content.isOpen {
  transform: translate3d(220px, 0, 0);
}

/* Demo Navigation */
.title {
  font-size: 16px;
  line-height: 50px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 7px;
  color: #eee;
  border-bottom: 1px solid #222;
  background: #2a2a2a;
}

.nav li a {
  position: relative;
  display: block;
  padding: 15px 15px 15px 50px;
  font-size: 12px;
  color: #eee;
  border-bottom: 1px solid #222;
}

.nav li a:before {
  font: 14px fontawesome;
  position: absolute;
  top: 14px;
  left: 20px;
}

.nav li:nth-child(1) a:before {
  content: '\f00a';
}

.nav li:nth-child(2) a:before {
  content: '\f012';
}

.nav li:nth-child(3) a:before {
  content: '\f0e8';
}

.nav li:nth-child(4) a:before {
  content: '\f0c3';
}

.nav li:nth-child(5) a:before {
  content: '\f022';
}

.nav li:nth-child(6) a:before {
  content: '\f115';
}

.nav li:nth-child(7) a:before {
  content: '\f085';
}

.nav li:nth-child(8) a:before {
  content: '\f023';
  left: 23px;
}

.nav li a:hover {
  background: #444;
}

.nav li a.active {
  box-shadow: inset 5px 0 0 #5b5, inset 6px 0 0 #222;
  background: #444;
}



`;
}