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
  }
}
@media (min-width: 850px) {
  .cuadro {
    float: left;
    width: 47.5%;
  }
}
@media (min-width: 1108px) {
  .cuadro {
    float: left;
    width: 31.5%;
  }
}
@media (min-width: 1170px) {
  .cuadro {
    float: left;
    width: 31.6%;
  }
}
.azul {
  padding: 5px;
  background-color: #175f8a;
}


.naranja {
  padding: 5px;
  background-color: #f08030;
}


.tiempo {
	padding-left: 15px;
    padding-top: 15px;
    font-size: 15px;
}

.titulo {
    font-family: serif;
    padding-left: 14px;
    padding-right: 14px;
    padding-bottom: 16px;
    padding-top: 14px;
    color: white;
    font-size: 22px;
    text-align:center;
}

.contenido {
    text-align: center;
    font-family: serif;
    padding: 15px;
    color: rgba(0, 0, 0, 0.69);
    line-height: 24px;
    font-size: 18px;
    padding-bottom: 15%;
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
    color: white;
    font-size: 15px;
}

.calculo {
border: 1px solid white;
    font-family: sans-serif;
    font-size: 16px;
    text-align: center;
    background-color: #efecec;
    color: #464646;
    padding: 10px;
}
`
