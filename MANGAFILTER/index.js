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
const imagenesMangas = mangas.map((manga) => manga.imagen)
const div = document.getElementById('container_photo')
const boton = document.getElementById('lookmore')
boton.addEventListener('click', () => {
  const indiceAleatorio = Math.floor(Math.random() * imagenesMangas.length)
  const imagenAleatoria = imagenesMangas[indiceAleatorio]

  const imgElement = document.createElement('img')
  imgElement.classList.add('random')
  imgElement.src = imagenAleatoria

  div.innerHTML = ''
  div.appendChild(imgElement)
})
// index.js
