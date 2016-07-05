var csjs = require('csjs');
module.exports = csjs`

.img {
background-image: url('/assets/img/malvinas.jpg');
padding: 90px;
}



.sidebar {
  position: absolute;
  width: 220px;
  z-index: 999;
  top: 0;
  background-color: #ffffff;
  min-height: 100%;
  transform: translateX(-220px);
  transition: transform .096s;

  
}

.content {
  flex: 1;
  padding: 30px;
  background: #eee;
}

.sidebar.isOpen {
  transform: translateX(0px);
  transition: transform .096s;
  box-shadow: 0 0 5px black;
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
  text-decoration: none;
  position: relative;
  display: block;
  padding: 15px 15px 15px 50px;
  font-size: 13px;
  color: #adadad;
  font-weight: bold;
}

.nav li a:before {
  font: 14px fontawesome;
  position: absolute;
  top: 14px;
  left: 20px;
}

.nav li a:hover {
  cursor: pointer;
  background: #f3f3f3;
  color: #989898;
}

.nav li a.active {
  box-shadow: inset 5px 0 0 #5b7dbd, inset 6px 0 0;
  background: #e4e4e4;
  color: #5b7dbd;
}

.icon {
  fill: #6182C2;
  margin-top: -6px;
  float:left; 
  height: 32px;
  width: 34px;
}

`
