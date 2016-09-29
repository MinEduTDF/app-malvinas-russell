var createStore = require('store-emitter')
var xtend = require('xtend')
var  initialState = {
  flash: '',
  orientation: 0,
  position: '',
  started: false,
  isOpen: false,
  url: '/',
  news: [],
  getingNews: false,
  azimuth: [
  {
            "id": 1,
            "title": "Puerto Argentino",
            "img": "/assets/img/puerto_arg.jpg",
            "coordenadas": {lat: -51.6921, lng: -57.8589, elv: 0}
        },
        {
            "id": 2,
            "title": "Cementerio de Darwin",
            "img": "/assets/img/cementerio_darwin.jpg",
            "coordenadas": {lat: -51.796792, lng: -58.940663, elv: 0}        },
        {
            "id": 3,
            "title": "Hundimiento del Crucero Gral. Belgrano",
            "img": "/assets/img/crucero.jpg",
            "coordenadas": {lat: -55.4, lng: -61.533333, elv: 0}        },
        {
          "id": 4,
          "title": "Ushuaia, Capital de Malvinas",
          "img": "",
          "description": "Tus brazos se abren esperando incansable el abrazo de tu hermano Puerto argentino, la llegada de hombres de cientos de años que esperan el día de la paz y la unión, mujeres que vieron cientos de nevadas sin ver el final de la disputa encallada, encallada en rocas de costas bravías que acogieron soldados, halcones y marinos cobijando al alma y  el paño Argentino.\nSalud Ushuaia! Capital de Malvinas!",
          "coordenadas": {lat: -54.807222, lng: -68.304444, elv: 0}
        }

  ],
  timeline: 
     [
        {
            "id": 1,
            "category_id": 1,
            "title": "1493",
            "body": "El papa Alejandro VI promulga la bula inter caetera  por la cual se define un meridiano al oeste del cual todas las tierras halladas y por hallar pertenecerán a los reyes de Castilla y León.",
            "img": "/assets/img/1493.jpg",
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
            "img": "/assets/img/1494.jpg",
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
            "img": "/assets/img/1520.jpg",
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
            "img": "/assets/img/1713.jpg",
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
        },
        {
            "id": 6,
            "category_id": 1,
            "title": "1764",
            "body": "A través del navegante Louis Antoine de Bugainville, los franceses se instalan en la Isla Soledad  y  allí levantan el Fuerte Real de San Luis. Ante la protesta española, en 1767 Francia ordena la evacuación, reconociendo la legitimidad de los derechos que habían sido vulnerados.",
            "img": "/assets/img/1764.jpg",
            "url": "",
            "status": 1,
            "created": "2016-07-05T00:00:00+0000",
            "modified": "2016-07-05T00:00:00+0000"
        },
        {
            "id": 7,
            "category_id": 1,
            "title": "1766",
            "body": "Los ingleses instalan un fuerte en la isla Gran Malvina al que llaman \"Port Egmont\". Cuando se enteran, las autoridades españolas elevan una protesta que es desoída, hasta que en 1770 los expulsan por la fuerza.",
            "img": "/assets/img/1766.jpg",
            "url": "http://www.unla.edu.ar/documentos/observatorios/malvinas/manual.pdf",
            "status": 1,
            "created": "2016-07-05T01:00:00+0000",
            "modified": "2016-07-05T01:00:00+0000"
        },
        {
            "id": 8,
            "category_id": 1,
            "title": "1767",
            "body": "España protesta por la ocupación francesa y tras una serie de negociaciones  recibe el puerto de San Luis, el cual es rebautizado como Puerto Soledad. El mismo queda bajo la administración de Felipe Ruiz Puente, quien había sido designado primer gobernador de las islas Malvinas un año antes. Comienza la ocupación permanente por el gobierno español en las islas.",
            "img": "/assets/img/1767.jpg",
            "url": "http://www.unla.edu.ar/documentos/observatorios/malvinas/manual.pdf",
            "status": 1,
            "created": "2016-07-05T03:00:00+0000",
            "modified": "2016-07-05T03:00:00+0000"
        },
        {
            "id": 9,
            "category_id": 1,
            "title": "1770",
            "body": "España localiza Puerto Egmont y más tarde sus ocupantes ingleses son expulsados.",
            "img": "",
            "url": "http://www.unla.edu.ar/documentos/observatorios/malvinas/manual.pdf",
            "status": 1,
            "created": "2016-07-05T04:00:00+0000",
            "modified": "2016-07-05T04:00:00+0000"
        },
        {
            "id": 10,
            "category_id": 1,
            "title": "1771",
            "body": "El conflicto por  Puerto Egmont crea la posibilidad de una guerra entre España e Inglaterra. Ante esta situación, se firma la Declaración de Masserano en la que se establece que el puerto será devuelto a los ingleses, aunque sin afectar la soberanía sobre las islas.",
            "img": "",
            "url": "",
            "status": 1,
            "created": "2016-07-05T05:00:00+0000",
            "modified": "2016-07-05T05:00:00+0000"
        },
        {
            "id": 11,
            "category_id": 1,
            "title": "1774",
            "body": "Inglaterra empujada por las presiones económicas de la guerra de la independencia de los Estados Unidos evacua Puerto Egmont, no renunciando a los derechos que reclaman sobre las islas.",
            "img": "",
            "url": "",
            "status": 1,
            "created": "2016-07-05T06:00:00+0000",
            "modified": "2016-07-05T06:00:00+0000"
        },
        {
            "id": 12,
            "category_id": 1,
            "title": "1776",
            "body": "Con la creación del Virreinato del Río de la Plata, las Islas Malvinas se incluyen como territorio de la gobernación de Buenos Aires.",
            "img": "/assets/img/1776.jpg",
            "url": "",
            "status": 1,
            "created": "2016-07-05T06:00:00+0000",
            "modified": "2016-07-05T06:00:00+0000"
        },
        {
            "id": 13,
            "category_id": 1,
            "title": "1790",
            "body": "Con la firma del tratado de San Lorenzo de El Escorial, Gran Bretaña se compromete a no formar ningún establecimiento en las costas tanto orientales como occidentales de América Meridional ni en las islas adyacentes ya ocupadas por España, tal el caso de las Malvinas.",
            "img": "/assets/img/1790.jpg",
            "url": "https://es.wikipedia.org/wiki/Convenciones_de_Nutka",
            "status": 1,
            "created": "2016-07-05T07:00:00+0000",
            "modified": "2016-07-05T07:00:00+0000"
        },
        {
            "id": 14,
            "category_id": 1,
            "title": "1810",
            "body": "A partir del proceso revolucionario de Mayo en 1810, los territorios malvinenses pasaron a pertenecer a la comunidad política independiente del Río de la Plata, tomando posesión oficialmente del archipiélago en 1820.",
            "img": "",
            "url": "http://www.unla.edu.ar/documentos/observatorios/malvinas/manual.pdf",
            "status": 1,
            "created": "2016-07-06T09:00:00+0000",
            "modified": "2016-07-06T09:00:00+0000"
        },
        {
            "id": 15,
            "category_id": 1,
            "title": "1816",
            "body": "Las Provincias Unidas del Sud proclaman su independencia de la corona española, asumiendo la soberanía sobre las islas como legado español bajo el principio de utti posidettis juris (del latín, como poseéis de acuerdo al derecho, así poseeréis)  según el cual la soberanía territorial se define en base a los antiguos límites administrativos coloniales de las antiguas metrópolis.",
            "img": "",
            "url": "http://www.unla.edu.ar/documentos/observatorios/malvinas/manual.pdf",
            "status": 1,
            "created": "2016-07-06T10:00:00+0000",
            "modified": "2016-07-06T10:00:00+0000"
        },
        {
            "id": 16,
            "category_id": 1,
            "title": "1820",
            "body": "David Jewett, comandante de la \"Heroína\", fue \"comisionado por el Supremo Gobierno de las Provincias Unidas para tomar posesión de las islas en nombre del país a que éstas pertenecen por ley natural\". En ese mismo año se dicta una ley de pesca para regular esta actividad en las islas.",
            "img": "/assets/img/1820.jpg",
            "url": "",
            "status": 1,
            "created": "2016-07-06T11:00:00+0000",
            "modified": "2016-07-06T11:00:00+0000"
        },
        {
            "id": 17,
            "category_id": 1,
            "title": "1823",
            "body": "El gobernador de Buenos Aires Martín Rodríguez autoriza al comerciante Luis Vernet a instalar una colonia de trabajadores en la isla Soledad para explotar  el aceite y las pieles de pinnípedos.",
            "img": "",
            "url": "",
            "status": 1,
            "created": "2016-07-06T12:00:00+0000",
            "modified": "2016-07-06T12:00:00+0000"
        },
        {
            "id": 18,
            "category_id": 1,
            "title": "1829",
            "body": "El gobierno de Buenos Aires nombra a  Luis Vernet como comandante político y militar de las Islas Malvinas. Este hecho fue repudiado por el gobierno inglés que inmediatamente reclamó derechos de descubrimiento y colonización.",
            "img": "/assets/img/1829.jpg",
            "url": "http://www.unla.edu.ar/documentos/observatorios/malvinas/manual.pdf",
            "status": 1,
            "created": "2016-07-06T12:00:00+0000",
            "modified": "2016-07-06T12:00:00+0000"
        },
        {
            "id": 19,
            "category_id": 1,
            "title": "1831",
            "body": "A fines de 1831, un buque de guerra de los Estados Unidos  el Lexinginton arrasó Puerto Soledad, en represalia por la captura de buques loberos de esa nacionalidad que habían sido hallados en infracción a la legislación de pesca por las autoridades argentinas. El gobierno argentino inició de inmediato las gestiones para obtener reparación de los Estados Unidos y, a la vez, envió una goleta de la Armada para restablecer el orden quebrado por la irrupción de la nave estadounidense. Esto provocó el rompimiento de las relaciones bilaterales con el país del norte y la remoción del cargo de Luis Vernet.",
            "img": "/assets/img/1831.jpg",
            "url": "http://www.unla.edu.ar/documentos/observatorios/malvinas/manual.pdf",
            "status": 1,
            "created": "2016-07-06T13:00:00+0000",
            "modified": "2016-07-06T13:00:00+0000"
        },
        {
            "id": 20,
            "category_id": 1,
            "title": "1832",
            "body": "Como gobernador de las islas fue designado Esteban Mestivier, que envió la goleta de guerra Sarandí, al mando del Comandante Pinedo, a restaurar el orden en las islas. En una sublevación el gobernador es asesinado y es reemplazado por Pinedo.",
            "img": "",
            "url": "http://www.unla.edu.ar/documentos/observatorios/malvinas/manual.pdf",
            "status": 1,
            "created": "2016-07-06T14:00:00+0000",
            "modified": "2016-07-06T14:00:00+0000"
        },
        {
            "id": 21,
            "category_id": 1,
            "title": "1833",
            "body": "Mientras Pinedo intentaba lograr su propósito, llegó al Puerto Soledad un buque de guerra británico, el Clío, al mando del Comandante Onslow. El capitán del buque se entrevistó con Pinedo, y le informó que había llegado con la orden de tomar posesión de las islas en nombre de su Majestad Británica, por lo que lo intimaba a abandonar las islas. Pinedo protestó enérgicamente, pero falto de recursos, no pudo de ofrecer resistencia.  Este acto de fuerza, realizado en tiempo de paz, sin que mediara comunicación ni declaración previa, fue inmediatamente objeto de protesta por las autoridades argentinas.\r\nEn este mismo año Antonio Rivero, junto con un grupo de gauchos e indios, se rebeló contra el estado de situación reinante en las Islas. Los gauchos fueron atacados por efectivos británicos, detenidos y sometidos a juicio. La goleta Beagle trasladó a Rivero a Inglaterra en calidad de prisionero.\r\n",
            "img": "/assets/img/1833.jpg",
            "url": "",
            "status": 1,
            "created": "2016-07-06T15:00:00+0000",
            "modified": "2016-07-06T15:00:00+0000"
        },
        {
            "id": 22,
            "category_id": 1,
            "title": "1834",
            "body": "Darwin estuvo presente en la ocupación definitiva de las Islas Malvinas por los británicos. Las cartas que le envía a su hermana, en 1834, dan cuenta de esa situación.",
            "img": "/assets/img/1834.jpg",
            "url": "http://www.cnrs.fr/cw/dossiers/dosdarwinS/contenu/alternative/alter2_textes.html",
            "status": 1,
            "created": "2016-07-06T16:00:00+0000",
            "modified": "2016-07-06T16:00:00+0000"
        },
        {
            "id": 23,
            "category_id": 1,
            "title": "1841",
            "body": "El gobierno inglés decide emprender la colonización de las Malvinas y nombra a un gobernador. En octubre de 1841 arribó el primer gobernador de las islas, el teniente Richard Clement Moody. Viajaban con él doce mineros y sus familias, dispuestos a asentarse en Malvinas.El gobernador Moody impulsó la creación de un nuevo poblado al que llamaron Puerto Stanley.",
            "img": "",
            "url": "",
            "status": 1,
            "created": "2016-07-06T00:00:00+0000",
            "modified": "2016-07-06T17:00:00+0000"
        },
        {
            "id": 24,
            "category_id": 1,
            "title": "1845",
            "body": "Se establecieron los principales órganos de gobierno colonial: el Consejo Legislativo y el Consejo Ejecutivo; tres años después se asignaron los cargos administrativos correspondientes.  Bajo la administración británica, la capital de las islas es traslada de Puerto Egmont a Puerto Soledad.",
            "img": "",
            "url": "",
            "status": 1,
            "created": "2016-07-06T17:00:00+0000",
            "modified": "2016-07-06T17:00:00+0000"
        },
        {
            "id": 25,
            "category_id": 1,
            "title": "1884",
            "body": "Ante la falta de respuesta a sus reiteradas protestas, la Argentina propuso llevar el tema a un arbitraje internacional, lo cual también fue rechazado sin dar razones por el Reino Unido.\r\nEl 15 de diciembre de 1884 el Instituto Geográfico Militar publicó un mapa de la República Argentina que incluía a las Malvinas, lo que provocó preocupación en la embajada del Reino Unido en Buenos Aires.\r\n",
            "img": "",
            "url": "http://www.unla.edu.ar/documentos/observatorios/malvinas/manual.pdf",
            "status": 1,
            "created": "2016-07-06T18:00:00+0000",
            "modified": "2016-07-06T18:00:00+0000"
        },
        {
            "id": 26,
            "category_id": 1,
            "title": "1910",
            "body": "Groussac, uno de los más distinguidos miembros de la generación del 80, escribe un libro fundamental sobre las Islas Malvinas y los derechos argentinos violados desde 1833.",
            "img": "/assets/img/1910.jpg",
            "url": "http://www.elhistoriador.com.ar/articulos/dictadura/usurpacion_de_malvinas_reclamaciones_argentinas_segun_paul_groussac.php",
            "status": 1,
            "created": "2016-07-06T19:00:00+0000",
            "modified": "2016-07-06T19:00:00+0000"
        },
        {
            "id": 27,
            "category_id": 1,
            "title": "1936",
            "body": "Bajo la presidencia de Agustín P. Justo, la Dirección de Correos emitió sellos postales donde las Islas Malvinas figuraban como parte del territorio nacional.",
            "img": "/assets/img/1936.jpg",
            "url": "",
            "status": 1,
            "created": "2016-07-06T20:00:00+0000",
            "modified": "2016-07-06T20:00:00+0000"
        },
        {
            "id": 28,
            "category_id": 1,
            "title": "1939",
            "body": "Se crea la Marcha a las Malvinas. La Marcha fue compuesta por José Tieri, autor de la música y Carlos Obligado, de la letra.",
            "img": "/assets/img/1939.jpg",
            "url": "",
            "status": 1,
            "created": "2016-09-21T00:00:00+0000",
            "modified": "2016-09-21T00:00:00+0000"
        },
        {
            "id": 29,
            "category_id": 1,
            "title": "1946",
            "body": "Durante el gobierno de Juan Domingo Perón, el Congreso argentino aprueba por unanimidad un proyecto para someter a discusión la soberanía en Malvinas ante el Consejo de Seguridad de la ONU, creado un año antes.",
            "img": "/assets/img/1946.jpg\r\n",
            "url": "http://www.unla.edu.ar/documentos/observatorios/malvinas/manual.pdf",
            "status": 1,
            "created": "2016-09-21T00:00:00+0000",
            "modified": "2016-09-21T00:00:00+0000"
        },
        {
            "id": 30,
            "category_id": 1,
            "title": "1947",
            "body": "Desde 1947 se impulsa de manera sistemática desde los sucesivos gobiernos argentinos, la demanda argentina por las islas Malvinas, Georgias y Sandwich en el marco del proceso de descolonización que sigue al final de la Segunda Guerra Mundial.",
            "img": "/assets/img/1947.jpg",
            "url": "http://www.unla.edu.ar/documentos/observatorios/malvinas/manual.pdf",
            "status": 1,
            "created": "2016-09-21T00:00:00+0000",
            "modified": "2016-09-21T00:00:00+0000"
        },
        {
            "id": 31,
            "category_id": 1,
            "title": "1960",
            "body": "Esperando acelerar el proceso de descolonización, la Asamblea General de Naciones Unidas aprobó la Declaración sobre la concesión de la independencia a los países y pueblos coloniales. En la Declaración sobre la descolonización, como también se la conoce, se proclama la necesidad de poner fin rápida e  incondicionalmente al colonialismo.",
            "img": "",
            "url": "http://www.unla.edu.ar/documentos/observatorios/malvinas/manual.pdf",
            "status": 1,
            "created": "2016-09-21T00:00:00+0000",
            "modified": "2016-09-21T00:00:00+0000"
        },
        {
            "id": 32,
            "category_id": 1,
            "title": "1964",
            "body": "El 8 de septiembre de 1964, con su pequeño avión Cessna 185  bautizado «Don Luis Vernet» el piloto Miguel Fitzgerald voló hacia las islas Malvinas desde la ciudad de Río Gallegos y aterrizó en la pista del hipódromo de Puerto Argentino. Enarboló una bandera argentina, y exigió ser recibido por el gobernador británico, para reclamarle por la soberanía argentina sobre el archipiélago. Luego emitió una protesta y regresó al continente antes de ser atrapado por las fuerzas del orden locales.",
            "img": "/assets/img/1964.jpg",
            "url": "http://www.unla.edu.ar/documentos/observatorios/malvinas/manual.pdf",
            "status": 1,
            "created": "2016-09-21T00:00:00+0000",
            "modified": "2016-09-21T00:00:00+0000"
        },
        {
            "id": 33,
            "category_id": 1,
            "title": "1965",
            "body": "Durante el gobierno de Arturo Illia, la Asamblea General de la ONU aprobó la resolución 2065, en la que reconoce el conflicto, se declara competente en la cuestión e invita a ambos gobiernos a mantener negociaciones. Ambos países pueden negociar acerca de las Islas atendiendo a los intereses de los isleños pero dejando de lado el principio de libre autodeterminación por no ser población originaria.",
            "img": "/assets/img/1965.jpg",
            "url": "http://www.unla.edu.ar/documentos/observatorios/malvinas/manual.pdf",
            "status": 1,
            "created": "2016-09-21T00:00:00+0000",
            "modified": "2016-09-21T00:00:00+0000"
        },
        {
            "id": 34,
            "category_id": 1,
            "title": "1966",
            "body": "En septiembre de 1966 tiene lugar el llamado Operativo Cóndor. Un grupo de 18 argentinos obreros y estudiantes-, tomaron el control de un avión de Aerolíneas Argentinas y aterrizaron en las Islas Malvinas, donde izaron la bandera argentina y resistieron a la autoridad británica.",
            "img": "/assets/img/1966.jpg",
            "url": "http://www.unla.edu.ar/documentos/observatorios/malvinas/manual.pdf",
            "status": 1,
            "created": "2016-09-21T00:00:00+0000",
            "modified": "2016-09-21T00:00:00+0000"
        },
        {
            "id": 35,
            "category_id": 1,
            "title": "1967",
            "body": "Se firma el Memorándum de Entendimiento en el que el gobierno británico aprobaría la soberanía si previamente se garantizaba la comunicación  de la islas con el continente y se aseguraban los intereses de los isleños. En diciembre de este año, se suspenden las tratativas tras la oposición de los conservadores en el parlamento inglés.",
            "img": "",
            "url": "",
            "status": 1,
            "created": "2016-09-21T00:00:00+0000",
            "modified": "2016-09-21T00:00:00+0000"
        },
        {
            "id": 36,
            "category_id": 1,
            "title": "1968",
            "body": "Fitzgerald realizó un segundo viaje a las islas desde Río Gallegos, esta vez al mando de un avión bimotor Grand Commander propiedad del diario Crónica, en el que también viajaban Héctor Ricardo García, director del citado matutino, y uno de sus periodistas, Juan Carlos Navas. Esta vez la pista del hipódromo había sido obstruida, por lo que se vio obligado a tomar tierra en una carretera, lo que produjo la rotura de una hélice. Fueron de detenidos minutos más tarde por un oficial británico, luego de lo cual fueron declarados «inmigrantes ilegales», por lo que pasaron 48 horas detenidos. Luego fueron subidos al HMS Endurante de la Royal Navy con destino a Río Gallegos.",
            "img": "",
            "url": "",
            "status": 1,
            "created": "2016-09-21T00:00:00+0000",
            "modified": "2016-09-21T00:00:00+0000"
        },
        {
            "id": 37,
            "category_id": 1,
            "title": "1971",
            "body": "En el marco de la  resolución 2065 de la XX Asamblea General de las Naciones Unidas se entablaron conversaciones con el objeto de convenir medidas prácticas para la realización y promoción de la libertad de comunicaciones y movimiento entre el territorio continental y las islas, en ambas direcciones.",
            "img": "/assets/img/1971.jpg",
            "url": "http://www.telam.com.ar",
            "status": 1,
            "created": "2016-09-21T00:00:00+0000",
            "modified": "2016-09-21T00:00:00+0000"
        },
        {
            "id": 38,
            "category_id": 1,
            "title": "1974",
            "body": "Se evalúa la posibilidad de una soberanía compartida pero con el fallecimiento del presidente Juan Domingo Perón las negociaciones quedaron truncas.",
            "img": "",
            "url": "",
            "status": 1,
            "created": "2016-09-21T00:00:00+0000",
            "modified": "2016-09-21T00:00:00+0000"
        },
        {
            "id": 39,
            "category_id": 1,
            "title": "1982",
            "body": "El 2 de abril la Argentina recupera las Islas Malvinas y en los meses siguientes se desarrolla un conflicto armado con Gran Bretaña por el control de las mismas. Durante el conflicto pierden la vida  649 argentinos y más de mil son heridos. El 14 de junio se produce la rendición de Argentina y Gran Bretaña retoma la administración de las islas.",
            "img": "",
            "url": "http://www.unla.edu.ar/documentos/observatorios/malvinas/manual.pdf",
            "status": 1,
            "created": "2016-09-21T00:00:00+0000",
            "modified": "2016-09-21T00:00:00+0000"
        },
        {
            "id": 40,
            "category_id": 1,
            "title": "1985",
            "body": "El gobierno británico otorga plena ciudadanía a los isleños y se redacta una constitución que les concede mayor intervención sobre los asuntos internos de las islas.",
            "img": "",
            "url": "",
            "status": 1,
            "created": "2016-09-21T00:00:00+0000",
            "modified": "2016-09-21T00:00:00+0000"
        },
        {
            "id": 41,
            "category_id": 1,
            "title": "1991",
            "body": "Familiares de los caídos argentinos visitan por primera vez el cementerio Darwin.",
            "img": "",
            "url": "",
            "status": 1,
            "created": "2016-09-21T00:00:00+0000",
            "modified": "2016-09-21T00:00:00+0000"
        },
        {
            "id": 42,
            "category_id": 1,
            "title": "1994",
            "body": "Argentina reforma su Constitución nacional y ratifica su legitimidad e imprescriptible soberanía sobre las islas.",
            "img": "",
            "url": "http://www.unla.edu.ar/documentos/observatorios/malvinas/manual.pdf",
            "status": 1,
            "created": "2016-09-21T00:00:00+0000",
            "modified": "2016-09-21T00:00:00+0000"
        },
        {
            "id": 43,
            "category_id": 1,
            "title": "1995",
            "body": "La Argentina y Gran Bretaña firman un acuerdo para la exploración y explotación de los hidrocarburos en la zona del Atlántico Sur adyacente a Malvinas.",
            "img": "",
            "url": "http://www.unla.edu.ar/documentos/observatorios/malvinas/manual.pdf",
            "status": 1,
            "created": "2016-09-21T00:00:00+0000",
            "modified": "2016-09-21T00:00:00+0000"
        },
        {
            "id": 44,
            "category_id": 1,
            "title": "1999",
            "body": "Un acuerdo entre los gobiernos argentino y británico pone fin a la prohibición de visitas de ciudadanos argentinos a las islas.",
            "img": "",
            "url": "",
            "status": 1,
            "created": "2016-09-21T00:00:00+0000",
            "modified": "2016-09-21T00:00:00+0000"
        },
        {
            "id": 45,
            "category_id": 1,
            "title": "2007",
            "body": "El gobierno argentino renueva su reclamo de soberanía y cancela el acuerdo con Gran Bretaña  por la exploración y explotación de los hidrocarburos en la zona del Atlántico Sur adyacente a Malvinas. La cancillería argentina expresó, a través de un comunicado, que la exploración británica de petróleo en las islas Malvinas se trata de un \"acto ilegal que va en contra del Derecho Internacional y las resoluciones de las Naciones Unidas.\"",
            "img": "",
            "url": "http://www.youtube.com/watch?v=bD5cJKCDPww",
            "status": 1,
            "created": "2016-09-21T00:00:00+0000",
            "modified": "2016-09-21T00:00:00+0000"
        },
        {
            "id": 46,
            "category_id": 1,
            "title": "2010",
            "body": "Los estados miembros de la UNASUR acuerdan prohibir el atraco de los barcos con bandera ilegal de las Islas Malvinas para respaldar el reclamo de la Argentina por la soberanía de las mismas entrevista desde Nueva York con el Canciller argentino Héctor Timerman, antes de comenzar su exposición en el Comité de Descolonización de las Naciones Unidas.\r\nA los motivos del reclamo argentino por la soberanía sobre las Islas Malvinas se suma la denuncia por la explotación petrolífera de Gran Bretaña sobre el territorio malvinense como amenaza al ecosistema de la plataforma marítima argentina.  El Canciller aclara que la Argentina está dispuesta a definir la situación en términos diplomáticos, retomando el diálogo pacífico con el Reino Unido.",
            "img": "",
            "url": "http://www.youtube.com/watch?v=77c3-YcYj6w",
            "status": 1,
            "created": "2016-09-21T00:00:00+0000",
            "modified": "2016-09-21T00:00:00+0000"
        },
        {
            "id": 47,
            "category_id": 1,
            "title": "2011",
            "body": "La Legislatura de Tierra del Fuego aprueba la Ley Gaucho Rivero prohibiendo el amarre de barcos de bandera británica o de conveniencia que exploren o exploten recursos naturales en las Islas Malvinas.",
            "img": "/assets/img/2011.jpg",
            "url": "https://es.wikipedia.org/wiki/Ley_Gaucho_Rivero",
            "status": 1,
            "created": "2016-09-21T00:00:00+0000",
            "modified": "2016-09-21T00:00:00+0000"
        },
        {
            "id": 48,
            "category_id": 1,
            "title": "2012",
            "body": "El Senado y la Cámara de diputados de la Nación Argentina firman la Declaración de Ushuaia, que ratifica la soberanía argentina sobre las Islas Malvinas, agradece la solidaridad de los países latinoamericanos y rechaza el proceso de militarización de las Islas por parte de Gran Bretaña.",
            "img": "",
            "url": "http://www.senado.gov.ar/prensa/10219/noticias",
            "status": 1,
            "created": "2016-09-21T00:00:00+0000",
            "modified": "2016-09-21T00:00:00+0000"
        },
        {
            "id": 49,
            "category_id": 1,
            "title": "2013",
            "body": "En la consulta realizada por Gran Bretaña en Malvinas, los isleños  reafirmaron su voluntad de seguir siendo ciudadanos británicos.",
            "img": "/assets/img/2013.jpg",
            "url": "http://www.abc.es/internacional/20130312/abci-malvinas-apoyo-soberania-britanica-201303120339.html",
            "status": 1,
            "created": "2016-09-21T00:00:00+0000",
            "modified": "2016-09-21T00:00:00+0000"
        },
        {
            "id": 50,
            "category_id": 1,
            "title": "2016",
            "body": "La ONU aprobó la propuesta realizada por el  Argentina para ampliar la plataforma continental. Esta se  amplió en 1,7 millón de kilómetros cuadrados que representa un 35 por ciento más de jurisdicción argentina marítima y un 48 por ciento de la superficie terrestre del país.",
            "img": "/assets/img/2016.jpg",
            "url": "www.plataformaargentina.gov.ar",
            "status": 1,
            "created": "2016-09-21T00:00:00+0000",
            "modified": "2016-09-21T00:00:00+0000"
        }
    ],
      mensajes:
        [{id: 1,
          title: 'Jose Purcelli',
         img: 'assets/img/1.jpg'
        },
        {id: 2,
          title: 'Maria Belen',
          img: 'assets/img/2.jpg'
        },
        {id: 3,
          title: 'Nestor Ramos y Monica',
          img: 'assets/img/3.jpg'
        },
        {id: 4,
          title: 'Pablo Bolzan',
          img: 'assets/img/4.jpg'
        },
        {id: 5,
          title: 'Rogelio Kurt',
          img: 'assets/img/5.jpg'
        },
        {id: 6,
          title: 'Sandra Paciaroni',
          img: 'assets/img/6.jpg'
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
  },
  position: function position(action, state) {
    return xtend(state, {position: action.payload})
  },
  flash: function flash(action, state) {
    return xtend(state, {flash: action.payload})
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
