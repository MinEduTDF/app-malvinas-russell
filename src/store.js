var xtend = require('xtend')
var  initialState = {
  isOpen: false,
  url: '/',
  news: [],
  timeline: [
   {
            "id": 1,
            "category_id": 1,
            "title": "1493",
            "body": "El papa Alejandro VI promulga la bula inter caetera  por la cual se define un meridiano al oeste del cual todas las tierras halladas y por hallar pertenecerán a los reyes de Castilla y León.",
            "img": "/apiMalvinas/ltiempo/1493.JPG",
            "url": "http://www.elhistoriador.com.ar/articulos/conquista_y_colonia/la_bula_intercaetera_legitima_ocupacion_espanola_de_las_indias_occidentales.php",
            "status": 1,
            "created": "2016-06-14T11:14:19+0000",
            "modified": "2016-06-14T11:14:19+0000"
        },
        {
            "id": 2,
            "category_id": 1,
            "title": "1494",
            "body": "El 7 de junio de 1494 se reunieron en Tordesillas  España y Portugal  llegaron a un acuerdo según el cual se trasladaba la antigua lí nea divisoria de los territorios descubiertos a 370 leguas al oeste de las islas de Cabo Verde, coincidiendo con el meridiano situado a 46º 37' longitud oeste. De esta manera, y sin saberlo, gran parte del futuro Brasil quedaba dentro de la influencia portuguesa y el resto de América bajo la influencia castellana.",
            "img": "/apiMalvinas/ltiempo/1494.JPG",
            "url": "http://www.fileane.com/espagnol/tratado_de_tordesillas.htm",
            "status": 1,
            "created": "2016-06-30T13:00:00+0000",
            "modified": "2016-06-30T13:00:00+0000"
        },
        {
            "id": 3,
            "category_id": 1,
            "title": "1520",
            "body": "Magallanes descubre las Islas Malvinas  figurando a partir de entonces en los mapas de la época, aunque con diferente nomenclatura, señalado como territorio no ocupado pero perteneciente la corona española.",
            "img": "/apiMalvinas/ltiempo/1520.JPG",
            "url": "https://www.wdl.org/es/item/3082/",
            "status": 1,
            "created": "2016-06-30T13:00:00+0000",
            "modified": "2016-06-30T13:00:00+0000"
        },
        {
            "id": 4,
            "category_id": 1,
            "title": "1713",
            "body": "La Paz de Utrecht, firmada por España, Francia e Inglaterra, aseguró la integridad de las posesiones de la corona hispánica en América del Sur y confirmó su exclusividad en la navegación en el Atlántico Sur.",
            "img": "/apiMalvinas/ltiempo/1713.JPG",
            "url": "http://www.abc.es/espana/20130806/abci-gibraltar-tratado-utrecht-201308061405.html",
            "status": 1,
            "created": "2016-06-30T13:00:00+0000",
            "modified": "2016-06-30T13:00:00+0000"
        },
        {
            "id": 5,
            "category_id": 1,
            "title": "1744",
            "body": "Primera tentativa de Gran Bretaña de ocupar las islas. España efectuó una una protesta diplomática ante la cual el gobierno británico respondió que sus navegantes las habían descubierto en el siglo XVI. España respondió que las islas eran adyacentes al continente americano y que también sus navegantes las visitaron en el mismo siglo, por lo que la ocupación fue paralizada.",
            "img": "",
            "url": "http://www.unla.edu.ar/documentos/observatorios/malvinas/manual.pdf",
            "status": 1,
            "created": "2016-06-30T13:00:00+0000",
            "modified": "2016-06-30T13:00:00+0000"
        }
       ] 

}

var reducers = {
  menu: function menu(action, state) {
    return xtend(state, {isOpen: !state.isOpen})
    },
  setUrl: function setUrl(action, state) {
    return xtend(state, {url: action.payload, isOpen: false})
  },
  closeMenu: function closeMenu(action, state) {
    if(state.isOpen)
      return xtend(state, {isOpen: false})
  },
  timeline: function timeline(action, state) {
      return xtend(state, state.timeline.push(action.payload))
  },
  news: function news(action, state) {
      return xtend(state, state.news.push(action.payload))
  },
  changeWidth: function changewidth(action, state) {
    return xtend(state, {windowWidth: action.payload})
        }
}
var reducer = function (reducers) {
  return reducers
}

// var cb = function () {
//   return self.postMessage({view: app(state), url: state.url})
// }
/* Creamos el store pasando como parámetros la función que lo modifica y el estado inicial. */
var store = function (reducers, initialState) {
  var state = initialState
  return function(action) {
    var type = action.type
    if (reducers[type]) {
    state = reducers[type](action, state) || state
    return state
    }
    else {
      console.log('there is no reducer of type ', type)
        return state
    }
  }
}
var blah = store(reducer(reducers), initialState)
module.exports = blah
