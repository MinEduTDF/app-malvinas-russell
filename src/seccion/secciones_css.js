var csjs = require('csjs')

module.exports = csjs`

@media screen and (min-width: 600px) {
  .logo_centro {
    width:40%;
  }
}


@media screen and (max-width: 600px) {
  .logo_centro {
    width:100%;
  }
}

.center {
  text-align: center;
}

.info {
  padding: 30px 20px 10px 20px;
  font-size: 14px;
  line-height: 1.5;
  background-color: #fff;
  color: #565656;
  box-shadow: 0px 2px 10px -5px #888888;
}
.header {
  text-transform: uppercase;
  font-weight: normal;
}
.line {
  padding: 20px;
}
.fixit {
  position: fixed;
  overflow: hidden;
  width: 100%;
}
`
