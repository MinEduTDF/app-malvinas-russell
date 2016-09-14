var createStore = require('store-emitter')
var xtend = require('xtend')
var  initialState = {
  otientation: 0,
  started: false,
  isOpen: false,
  url: '/',
  news: [],
  getingNews: false,
  azimuth: [
  {
            "id": 1,
            "img": "/assets/img/azimuth/puerto_argentino.jpg",
            "coordenadas": "51°41 57°51"
        },
        {
            "id": 2,
            "img": "/assets/img/azimuth/cementerio_darwin.jpg",
            "coordenadas": "51°48 58°59"
        },
        {
            "id": 3,
            "img": "/assets/img/azimuth/crucero.jpg",
            "coordenadas": "55°24 61°32"
        }

  ]
  timeline: [
   {
            "id": 1,
            "category_id": 1,
            "title": "1493",
            "body": "El papa Alejandro VI promulga la bula inter caetera  por la cual se define un meridiano al oeste del cual todas las tierras halladas y por hallar pertenecerán a los reyes de Castilla y León.",
            "img": "/assets/img/ltiempo/1493.JPG",
            "url": "http://www.elhistoriador.com.ar/articulos/conquista_y_colonia/la_bula_intercaetera_legitima_ocupacion_espanola_de_las_indias_occidentales.php",
            "status": 1,
            "created": "2016-06-14T11:14:19+0000",
            "modified": "2016-06-14T11:14:19+0000",
            "dialogOpen": false
        },
        {
            "id": 2,
            "category_id": 1,
            "title": "1494",
            "body": "El 7 de junio de 1494 se reunieron en Tordesillas  España y Portugal  llegaron a un acuerdo según el cual se trasladaba la antigua lí nea divisoria de los territorios descubiertos a 370 leguas al oeste de las islas de Cabo Verde, coincidiendo con el meridiano situado a 46º 37' longitud oeste. De esta manera, y sin saberlo, gran parte del futuro Brasil quedaba dentro de la influencia portuguesa y el resto de América bajo la influencia castellana.",
            "img": "/assets/img/ltiempo/1494.JPG",
            "url": "http://www.fileane.com/espagnol/tratado_de_tordesillas.htm",
            "status": 1,
            "created": "2016-06-30T13:00:00+0000",
            "modified": "2016-06-30T13:00:00+0000",
            "dialogOpen": false
        },
        {
            "id": 3,
            "category_id": 1,
            "title": "1520",
            "body": "Magallanes descubre las Islas Malvinas  figurando a partir de entonces en los mapas de la época, aunque con diferente nomenclatura, señalado como territorio no ocupado pero perteneciente la corona española.",
            "img": "/assets/img/ltiempo/1520.JPG",
            "url": "https://www.wdl.org/es/item/3082/",
            "status": 1,
            "created": "2016-06-30T13:00:00+0000",
            "modified": "2016-06-30T13:00:00+0000",
            "dialogOpen": false
        },
        {
            "id": 4,
            "category_id": 1,
            "title": "1713",
            "body": "La Paz de Utrecht, firmada por España, Francia e Inglaterra, aseguró la integridad de las posesiones de la corona hispánica en América del Sur y confirmó su exclusividad en la navegación en el Atlántico Sur.",
            "img": "/assets/img/ltiempo/1713.JPG",
            "url": "http://www.abc.es/espana/20130806/abci-gibraltar-tratado-utrecht-201308061405.html",
            "status": 1,
            "created": "2016-06-30T13:00:00+0000",
            "modified": "2016-06-30T13:00:00+0000",
            "dialogOpen": false
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
            "modified": "2016-06-30T13:00:00+0000",
            "dialogOpen": false
        }
       ] 

}

var reducers = {
  menu: function menu(action, state) {
    return xtend(state, {isOpen: !state.isOpen, started: true})
    },
  dialogOpen: function dialogOpen(action, state) {
    state.timeline[action.payload].dialogOpen = true
    return state
    },
  dialogClose: function dialogClose(action, state) {
    state.timeline[action.payload].dialogOpen = false
    return state
    },
    
  setUrl: function setUrl(action, state) {
    return xtend(state, {url: action.payload, isOpen: false})
  },
  closeMenu: function closeMenu(action, state) {
    // if(state.isOpen)
      return xtend(state, {isOpen: false})
  },
  timeline: function timeline(action, state) {
      return xtend(state, state.timeline.push(action.payload))
  },
  news: function news(action, state) {
      return xtend(state, {news: action.payload})
  },
  getingNews: function getingNews(action, state) {
    return xtend(state, {getingNews: action.payload})
  },
  changeWidth: function changewidth(action, state) {
    return xtend(state, {windowWidth: action.payload})
  },
  hydrate: function hydrate(action, state) {
    return xtend(state, action.payload)
  },
  deviceorientation: function deviceorientation(action, state) {
    return xtend(state, {orientation: action.payload})
  }
}

var reducer = function (reducers) {
  return function(action, state) {
    var type = action.type
    if (reducers[type]) {
    return reducers[type](action, state)
    }
    // else {
    //   console.log('there is no reducer of type ', type)
    //     return state
    // }
  }
}
var store = createStore(reducer(reducers), initialState)
module.exports = store
