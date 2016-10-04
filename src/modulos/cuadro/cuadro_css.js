var csjs = require('csjs')
module.exports = csjs`

.cuadro {
    position: relative;
    background-color:white;
    margin: 10px;
    padding: 10px;
    border-style: solid;
    border-width: 0.1em;
    border-color: #E4E4E4;
    box-shadow: 0px 2px 10px -5px #888888;
}

@media (min-width: 690px) {
  .cuadro {
    float: left;
    width: 47%;
    height: 344px
  }
}
@media (min-width: 850px) {
  .cuadro {
    float: left;
    width: 47.5%;
    height: 344px
  }
}
@media (min-width: 1108px) {
  .cuadro {
    float: left;
    width: 31.5%;
    height: 344px
  }
}
@media (min-width: 1170px) {
  .cuadro {
    float: left;
    width: 31.6%;
    height: 344px
  }
}
.azul {
  background-color: #175f8a;
}

.textoazul {
  color: #175f8a;
}

.naranja {
  background-color: #f08030;
}

.textonaranja {
  color: #f08030;
}

.tiempo {
	padding-left: 15px;
    padding-top: 15px;
    font-size: 15px;
}

.icon {
  width:12px;
  float:left;
  margin: 7px 7px 0 0;
}

.date {
  padding:5px;
  color: #828282;
}

.titulo {
    padding-left: 14px;
    padding-right: 14px;
    padding-bottom: 16px;
    padding-top: 25px;
    font-size: 22px;
    color: #565656;
    background-color: #f7f6f6;
}

.contenido {
    font-family: serif;
    padding: 15px;
    color: #333;
    line-height: 24px;
    font-size: 16px;
    padding-bottom: 15%;
}

.imgheight {
    overflow-y: hidden; ;
    height:200px;
}

.divbtn {
    width: 100%;
    position: absolute;
    padding: 10px;
    text-align: right;
    left: 0;
    bottom: 0;
    padding-bottom: 17px;
}

.btn {
    padding: 6px;
    text-decoration: none;
    color: #828282;
    font-size: 15px;
}
.ornament {
  padding: 5px;
}
.separator {
  border: 1px dashed #dedede;
}`
