var csjs = require('csjs');
module.exports = csjs`

.img {
background-image: url('/assets/img/malvinas.jpg');
padding: 90px;
}


.menu {
    padding: 23px;
    left: 11px;
    top: 3px;
    background: rgba(0, 0, 0, 0);
    width: 0px;
    position: fixed;
    cursor: pointer;
}

.sidebar {
  position: absolute;
  z-index:10;
  width: 220px;
  top: 0;
  background-color: #ffffff;
  height: 100vh;
  overflow-y: auto;
  transform: translateX(-100%);
  will-change: transform;
}



.content {
  flex: 1;
  padding: 30px;
  background: #eee;
}



.black {
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.74);
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;
  opacity: 1;
  transform: opacity;
  will-change: transform;


}
.isOpen {
  transform: none;
  transition: transform 230ms ease-in;  
  will-change: transform;
}
.isOpenb {
  height: 100%;
  width: 100%;
  transform: none;
  transition: transform 330ms ease-in;  
  will-change: transform;

}
.isClosed {
  transform: translateX(-100%);
  transition: transform 230ms ease-out;  
  will-change: transform;
}
.isClosedb {
  opacity: 0;
  transform: opacity;
  transition: transform 230ms ease-out;  
  will-change: transform;
}





.nav {
  background-color: white;
}

.nav li a {
  border-bottom: 1px dashed #dedede;
  text-decoration: none;
  position: relative;
  display: block;
  padding: 15px 15px 15px 13px;
  font-size: 14px;
  color: #565656;
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
    margin-top: -7px;
    float: left;
    height: 27px;
    padding-right: 9px;
}
.svgmenu {
  width: 30px;
}
.menubarra {
  padding: 10px;
  padding-left: 17px;
  background-color: #6389c8;
}

`

