const mangas = [
  {
    titulo: 'Naruto Vol. 1',
    precio: 10,
    imagen:
      'https://cdn.aprendejaponeshoy.com/4268-large_default/naruto-vol-1.jpg'
  },
  {
    titulo: 'Naruto Vol. 2',
    precio: 12,
    imagen:
      'https://static.fnac-static.com/multimedia/Images/ES/NR/5c/61/16/1466716/1540-1/tsp20180320164615/Naruto-2.jpg'
  },
  {
    titulo: 'One Piece Vol. 1',
    precio: 8,
    imagen:
      'https://m.media-amazon.com/images/I/71y+XnBXm4L._AC_UF894,1000_QL80_.jpg'
  },
  {
    titulo: 'One Piece Vol. 2',
    precio: 9,
    imagen:
      'https://m.media-amazon.com/images/I/91p+lxi6AkL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    titulo: 'Hajime no Ippo Vol. 1',
    precio: 15,
    imagen:
      'https://cdn.aprendejaponeshoy.com/18053-big_default_2x/hajime-no-ippo-vol-1-the-fighting.jpg'
  },
  {
    titulo: 'Hajime no Ippo Vol. 2',
    precio: 9,
    imagen:
      'https://www.planetadelibros.com/usuaris/libros/fotos/377/original/portada_hajime-no-ippo-n-02__202305021251.jpg'
  },
  {
    titulo: 'Hunter x Hunter Vol. 1',
    precio: 15,
    imagen:
      'https://m.media-amazon.com/images/I/71kSq30ef5L._AC_UF1000,1000_QL80_.jpg'
  },
  {
    titulo: 'Hunter x Hunter Vol. 2',
    precio: 7,
    imagen:
      'https://m.media-amazon.com/images/I/815uHbvvu1L._AC_UF1000,1000_QL80_.jpg'
  },
  {
    titulo: 'Great Teacher Onizuka Vol. 1',
    precio: 12,
    imagen: 'https://upload.wikimedia.org/wikipedia/en/b/b9/GTO_volume_1.jpg'
  },
  {
    titulo: 'Great Teacher Onizuka Vol. 2',
    precio: 17,
    imagen:
      'https://m.media-amazon.com/images/I/71p2Pf7O8vL._AC_UF894,1000_QL80_.jpg'
  },
  {
    titulo: 'Naruto Vol. 3',
    precio: 20,
    imagen:
      'https://m.media-amazon.com/images/I/91bYLitoQ4L._AC_UF1000,1000_QL80_.jpg'
  },
  {
    titulo: 'One Piece Vol. 3',
    precio: 10,
    imagen:
      'https://m.media-amazon.com/images/I/91F4-1ONE4L._AC_UF894,1000_QL80_.jpg'
  },
  {
    titulo: 'Hajime no Ippo Vol. 3',
    precio: 8,
    imagen: 'https://justfreak.es/22264-large_default/hajime-no-ippo-3.jpg'
  },
  {
    titulo: 'Hunter x Hunter Vol. 3',
    precio: 11,
    imagen:
      'https://m.media-amazon.com/images/I/91YMBqwW9JL._AC_UF894,1000_QL80_.jpg'
  },
  {
    titulo: 'Great Teacher Onizuka Vol. 3',
    precio: 13,
    imagen:
      'https://comicsbarcelona.com/124539-large_default/gto-great-teacher-onizuka-3.jpg'
  }
]
/// im gonna keep here the bottons and other things to use it.
const botonFind = document.querySelector('.find')
const botonClean = document.querySelector('.clean')
const input = document.querySelector('input')
const selector = document.querySelector('select')
let option = selector.value
let mangasHtml = ''

mangas.forEach((manga) => {
  mangasHtml += `
    <div class="card">
      <img src="${manga.imagen}" alt="${manga.titulo}" />
      <h3 id="titulonDataInfo">${manga.titulo}</h3>
      <p>$${manga.precio.toFixed(2)}</p>
    </div>
  `
})

document.querySelector('main').innerHTML = mangasHtml
/// lo que he hecho es que todo se active con la misma función, me explico, si le doy al selector se activa la función con el filtro y filtra y me saca los mangas corresponientes y si filtro por precio tambien me hara el mismo filtro cogera el input number y dispues mirara cual es el selector
//entonces porque se activaria solo con el selector si no tiene ningun numero en el input number? porque recordemos que en el if tengo un condiconal con estos podre filtrar dos parametros y el infitiy hara que si esta vacio tambien pueda filtrar
function filterMangas() {
  const option = selector.value.toLowerCase()
  const maxPrice = parseFloat(input.value) || Infinity
  let filteredMangasHtml = ''

  mangas.forEach((manga) => {
    if (
      (option === 'all' || manga.titulo.toLowerCase().includes(option)) &&
      manga.precio <= maxPrice
    ) {
      filteredMangasHtml += `
        <div class="card">
          <img src="${manga.imagen}" alt="${manga.titulo}" />
          <h3 id="titulonDataInfo">${manga.titulo}</h3>
          <p>$${manga.precio.toFixed(2)}</p>
        </div>
      `
    }
  })

  if (!filteredMangasHtml) {
    document.querySelector('main').innerHTML =
      '<h3 id="noresults">No hay resultados para tu búsqueda</h3>'
  } else {
    document.querySelector('main').innerHTML = filteredMangasHtml
  }
}

selector.addEventListener('change', filterMangas)

botonFind.addEventListener('click', filterMangas)

botonClean.addEventListener('click', () => {
  document.querySelector('main').innerHTML = mangasHtml
  input.value = ''
  selector.value = 'all'
})
