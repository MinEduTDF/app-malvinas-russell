var csjs = require('csjs')
module.exports = csjs`

.circle {
	cursor: pointer;
	width: 100%;
	height: 100%;
	border-radius: 150px;
	-webkit-border-radius: 150px;
	-moz-border-radius: 150px;
  display: block;
}
.titulo {
    padding: 64px;
    float: left;
    font-size: 47px;
}
.anio {
  width: 100%;
  margin: 0 auto;
}
@media (min-width: 500px) {
  .anio {
    width: 500px;
  } 
}
`
