Documentación de API
====================
La API de Decibely permite acceder y gestionar información relacionada con canciones, álbumes, playlists, carpetas, podcasts, capítulos y usuarios. A continuación, se detallan las diferentes rutas que la API ofrece.

- [Documentación de API](#documentación-de-api)
  - [Canciones](#canciones)
    - [Compartir canción con un usuario](#compartir-canción-con-un-usuario)
    - [Ver canciones compartidas a un usuario](#ver-canciones-compartidas-a-un-usuario)
    - [Buscar una cancion por una cadena](#buscar-una-cancion-por-una-cadena)
    - [Buscar una cancion por una cadena](#buscar-una-cancion-por-una-cadena-1)
    - [Obtener todas las canciones](#obtener-todas-las-canciones)
    - [Obtener una canción por su ID](#obtener-una-canción-por-su-id)
    - [Crear una nueva canción](#crear-una-nueva-canción)
    - [Actualizar una canción por su ID](#actualizar-una-canción-por-su-id)
    - [Eliminar una canción por su ID](#eliminar-una-canción-por-su-id)
  - [Playlists](#playlists)
    - [Compartir Playlist con un usuario](#compartir-playlist-con-un-usuario)
    - [Ver playlists compartidas a un usuario](#ver-playlists-compartidas-a-un-usuario)
    - [Buscar una playlist por una cadena](#buscar-una-playlist-por-una-cadena)
    - [Buscar una playlist por un tag](#buscar-una-playlist-por-un-tag)
    - [Obtener todas las playlists](#obtener-todas-las-playlists)
    - [Obtener una playlist por su ID](#obtener-una-playlist-por-su-id)
    - [Crear una nueva playlist](#crear-una-nueva-playlist)
    - [Actualizar una playlist por su ID](#actualizar-una-playlist-por-su-id)
    - [Eliminar una playlist por su ID](#eliminar-una-playlist-por-su-id)
  - [Albumes](#albumes)
    - [Obtener todos los álbumes](#obtener-todos-los-álbumes)
    - [Obtener un álbum por su ID](#obtener-un-álbum-por-su-id)
    - [Crear un nuevo álbum](#crear-un-nuevo-álbum)
    - [Actualizar un álbum por su ID](#actualizar-un-álbum-por-su-id)
    - [Eliminar un álbum por su ID](#eliminar-un-álbum-por-su-id)
  - [Artistas](#artistas)
    - [Buscar un artista por una cadena](#buscar-un-artista-por-una-cadena)
    - [Obtener todos los artistas](#obtener-todos-los-artistas)
    - [Obtener un artista por su ID](#obtener-un-artista-por-su-id)
    - [Crear un nuevo artista](#crear-un-nuevo-artista)
    - [Actualizar un artista por su ID](#actualizar-un-artista-por-su-id)
    - [Eliminar un artista por su ID](#eliminar-un-artista-por-su-id)
    - [Obtener todas las canciones de un artista](#obtener-todas-las-canciones-de-un-artista)
  - [Carpetas](#carpetas)
    - [Obtiene todas las carpetas](#obtiene-todas-las-carpetas)
    - [Obtiene una carpeta por su ID](#obtiene-una-carpeta-por-su-id)
    - [Crear una nueva carpeta](#crear-una-nueva-carpeta)
    - [Actualizar una carpeta existente por su ID](#actualizar-una-carpeta-existente-por-su-id)
    - [Eliminar una carpeta por su ID](#eliminar-una-carpeta-por-su-id)
  - [Podcasts](#podcasts)
    - [Obtiene todos los podcasts](#obtiene-todos-los-podcasts)
    - [Obtiene un podcast por su ID](#obtiene-un-podcast-por-su-id)
    - [Obtiene podcasts por su nombre](#obtiene-podcasts-por-su-nombre)
    - [Obtiene podcasts por su autor](#obtiene-podcasts-por-su-autor)
    - [Crea un nuevo podcast](#crea-un-nuevo-podcast)
    - [Actualiza un podcast existente por su ID](#actualiza-un-podcast-existente-por-su-id)
    - [Eliminar un podcast existente por su ID](#eliminar-un-podcast-existente-por-su-id)
  - [Capitulos](#capitulos)
    - [Obtener todos los capítulos](#obtener-todos-los-capítulos)
    - [Obtener un capítulo por su ID](#obtener-un-capítulo-por-su-id)
    - [Crea un nuevo capítulo](#crea-un-nuevo-capítulo)
    - [Actualiza un capítulo existente por su ID](#actualiza-un-capítulo-existente-por-su-id)
    - [Eliminar un capítulo por su ID](#eliminar-un-capítulo-por-su-id)
  - [Notificaciones](#notificaciones)
    - [Obtener todas las notificaciones de un usuario](#obtener-todas-las-notificaciones-de-un-usuario)
    - [Obtener una notificación por su ID](#obtener-una-notificación-por-su-id)
    - [Obtener todas las notificaciones de un usuario](#obtener-todas-las-notificaciones-de-un-usuario-1)
    - [Obtener una notificación por su ID](#obtener-una-notificación-por-su-id-1)
    - [Crear una nueva notificación](#crear-una-nueva-notificación)
    - [Actualizar una notificación existente](#actualizar-una-notificación-existente)
    - [Eliminar una notificación existente](#eliminar-una-notificación-existente)
    - [Eliminar todas las notificaciones de un usuario](#eliminar-todas-las-notificaciones-de-un-usuario)
  - [Usuario](#usuario)
    - [Buscar un usuario por una cadena](#buscar-un-usuario-por-una-cadena)
    - [Registrar un usuario](#registrar-un-usuario)
    - [Login de un usuario](#login-de-un-usuario)
    - [Obtener todos los usuarios](#obtener-todos-los-usuarios)
    - [Obtener un usuario por su ID](#obtener-un-usuario-por-su-id)
    - [Actualizar un usuario por su ID (correo electrónico)](#actualizar-un-usuario-por-su-id-correo-electrónico)
    - [Eliminar un usuario por su ID](#eliminar-un-usuario-por-su-id)

Canciones
---------
### Compartir canción con un usuario

Este endpoint permite compartir una canción

*   **URL:** `/songs/share`
*   **Método HTTP:** `POST`
*   **Headers:** Ninguno
*   **Headers:** Ninguno
*   **Body:** 

```
{
    "share": "alex@decibely.es",
    "receive": "luis@decibely.es",
    "identificador": "64582f2fb90b373e88912d4e"
}
```

*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
        `{ msg: 'Cancion compartida' }`
    
*   **Respuesta de error:**

    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta: (uno de todos)**
      
        `{ msg: 'Usuario no existente' }`
        `{ msg: 'Cancion no existente' }`
        `{"msg": "Hubo un error al compartir la canción"}`


    *   **Código:** 501 
    *   **Contenido del cuerpo de la respuesta:**
      
        `{ msg: 'Cancion ya compartida' }`
    
***

### Eliminar una canción compartida (dejar de compartirla)

Este endpoint permite compartir una canción

*   **URL:** `/songs/share/:id`
*   **Método HTTP:** `DELETE`
*   **Headers:** Ninguno
*   **Headers:** Ninguno
*   **Body:** Ninguno

*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
        `{ msg: 'Archivo compartido eliminado' }`
    
*   **Respuesta de error:**

    *   **Código:** 404 (Not found)
    *   **Contenido del cuerpo de la respuesta: (uno de todos)**
      
        `{ msg: 'No se encontró el archivo compartido' }`

    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta: (uno de todos)**
      
        `{ msg: 'Hubo un error al borrar el archivo compartido' }`
    
***

### Ver canciones compartidas a un usuario

Este endpoint permite ver las canciones compartidas

*   **URL:** `/songs/share/:user`
*   **Método HTTP:** `GET`
*   **Parámetros de URL: `user` (obligatorio): Usuario del que obtener canciones que le han compartido
*   **Headers:** Ninguno
*   **Headers:** Ninguno
*   **Body:** Ninguno

*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta: (share: quien compartió la cancion)**
        `
        {
            "_id": "645e64ab52bf9a44d8690670",
            "share": "alex@decibely.es",
            "receive": "luis@decibely.es",
            "identificador": "64582f2fb90b373e88912d4e",
            "atributo": "s",
            "__v": 0
        }
        `
    
*   **Respuesta de error:**

    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta: (uno de todos)**
      
        `{ msg: 'Usuario no existente' }`
        `{"msg": "Hubo un error al compartir la canción"}`


    *   **Código:** 404
    *   **Contenido del cuerpo de la respuesta:**
      
        `{ msg: 'No se encontraron canciones' }`
    
***


### Buscar una cancion por una cadena

Este endpoint permite buscar una canción por un string.

*   **URL:** `/songs/find/:name`
*   **Método HTTP:** `GET`
*   **Parámetros de URL: `name` (obligatorio): Cadena a buscar en la base de canciones
*   **Headers:** Ninguno
*   **Headers:** Ninguno
*   **Body:** Ninguno

*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
    
    
`{
    "songs": [
        {
            "etiquetas": [
                "rock",
                "classic"
            ],
            "_id": "644e46b615f4e6000e26eb90",
            "titulo": "Bohemian Rhapsody",
            "autor": "644e4659d11bf5000ec2a0d5",
            "Urlfoto": "https://www.shutterstock.com/image-vector/sea-waves-vintage-cartoon-ocean-600w-1022661748.jpg",
            "duracion": 355,
            "UrlCancion": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
            "__v": 0
        }
    ]
}`
    
*   **Respuesta de error:**

    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:**
    
    
    `{"mensaje": "Hubo un error al buscar las canciones"}`
    
***

### Buscar una cancion por una cadena

Este endpoint permite buscar una canción por un tag.

*   **URL:** `/songs/find/tag/:tag`
*   **Método HTTP:** `GET`
*   **Parámetros de URL: `tag` (obligatorio): tag a buscar en la base de canciones
*   **Headers:** Ninguno
*   **Headers:** Ninguno
*   **Body:** Ninguno

*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
    
    
`{
    "song": [
        {
            "etiquetas": [
                "Post-disco",
                "Funk",
                "Pop"
            ],
            "_id": "645920a3fc63f4000eb71bc3",
            "titulo": "Let's Groove",
            "autor": "64582974e5ff913bb4261a3c",
            "Urlfoto": "https://images.coveralia.com/audio/e/Earth,_Wind_y_Fire-Let_s_Groove_The_Best_Of_Earth,_Wind_y_Fire-Frontal.jpg",
            "duracion": 339,
            "UrlCancion": "https://backend-mmb6uq3x5q-ew.a.run.app/audio/6459ebb338a1c9310c4771d2",
            "__v": 0
        },
        {
            "etiquetas": [
                "R&B/Soul",
                "Pop"
            ],
            "_id": "6459233dfc63f4000eb71bc8",
            "titulo": "Rasputin",
            "autor": "645921a6fc63f4000eb71bc5",
            "Urlfoto": "https://cadenaser.com/resizer/2UJNdRQ67CzZZJ-iXanEpaxK55E=/1200x1200/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/FIZMJ44DQZKZHDCDEWTVPYC2ME.jpg",
            "duracion": 220,
            "UrlCancion": "https://backend-mmb6uq3x5q-ew.a.run.app/audio/6459eb730bc32a2624c0fc74",
            "__v": 0
        }
    ]
}`
    
*   **Respuesta de error:**

    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:**
    
    
    `{"mensaje": "Hubo un error al buscar las canciones"}`
    
***

### Obtener todas las canciones

Este endpoint permite obtener todas las canciones almacenadas en la base de datos.

*   **URL:** `/songs`
*   **Método HTTP:** `GET`
*   **Parámetros de URL:** Ninguno
*   **Headers:** Ninguno
*   **Body:** Ninguno
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
    
 ```
[ {
    "titulo": "Bohemian Rhapsody",
    "autor": 618b87bf9829ac235152345d
    "Urlfoto": "https://www.example.com/canciones/bohemian-rhapsody.jpg",
    "duracion": 355,
    "etiquetas": ["rock", "classic"],
    "UrlCancion": "https://www.example.com/canciones/bohemian-rhapsody.mp3"
}
,
    
    
 {
    "_id": "618b87bf9829ac2351523457",
    "titulo": "Hotel California",
    "autor": "618b87bf9829ac235152345e",
    "Urlfoto": "https://www.example.com/canciones/hotel-california.jpg",
    "duracion": 390,
    "etiquetas": ["rock", "classic"],
    "UrlCancion": "https://www.example.com/canciones/hotel-california.mp3"
}
,
  ...
]

 ```  
*   **Respuesta de error:**
    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al obtener las canciones"}`
* * *
### Obtener una canción por su ID

Este endpoint permite obtener una canción específica por su ID.

*   **URL:** `/songs/:id`
*   **Método HTTP:** `GET`
*   **Parámetros de URL:**
    *   `id`: El ID de la canción que se desea obtener (cadena de texto)
*   **Headers:** Ninguno
*   **Body:** Ninguno
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
```    
{
    "etiquetas": [],
    "_id": "644c1bc78c920e4290a13c24",
    "titulo": "Consultas avanzadas en MongoDB",
    "autor": "6446b7246f51ca34bcbf517a",
    "Urlfoto": "https://ejemplo.com/mongodb-consultas-avanzadas",
    "duracion": 90,
    "UrlCancion": "En esta lección aprenderás cómo hacer consultas avanzadas en MongoDB"
}

```
    
*   **Respuesta de error:**
    *   **Código:** 404 (Not Found)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "La canción no fue encontrada"}`
    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al obtener la canción"}`



* * *
### Crear una nueva canción


Este endpoint permite crear una nueva canción en la base de datos.

*   **URL:** `/songs`
    
*   **Método HTTP:** `POST`
    
*   **Headers:**
    
    *   `Content-Type: application/json`
*   **Body:**
    
    La solicitud debe incluir un cuerpo (body) en formato JSON con la siguiente estructura:

*   `titulo` (string, opcional): nuevo título de la canción.
*   `autor` (string, opcional): nuevo nombre del artista que interpreta la canción.
*   `Urlfoto` (string, opcional): nueva URL de la imagen de portada de la canción.
*   `duracion` (number, opcional): nueva duración en segundos de la canción.
*   `etiquetas` (array de strings, opcional): nueva lista de etiquetas que describen la canción.
*   `UrlCancion` (string, opcional): nueva URL del archivo de audio de la canción.
```
{  
	"titulo":  "LACUQUICHIN",  
	"autor":  "6446b7246f51ca34bcb517a",  
	"Urlfoto":  "cacasdasdasdaagaaeffa",  
	"duracion":  90,  
	"etiquetas":  ["MKhencie"],
	"UrlCancion":  "https://ejemplo.com/mongodb-consultas-avanzadas"  
}
```
    
*   **Respuestas:**
    
    *   `200 OK`: 
```
{  
    "_id": "644c1b5acb8fc443c89bc1fb",
	"titulo":  "LACUQUICHIN",  
	"autor":  "6446b7246f51ca34bcb517a",  
	"Urlfoto":  "cacasdasdasdaagaaeffa",  
	"duracion":  90,  
	"etiquetas":  ["MKhencie"],
	"UrlCancion":  "https://ejemplo.com/mongodb-consultas-avanzadas"  
}
```
        
    *   `400 Bad Request`: { msg: 'Autor no existente' }
        
    *   `500 Internal Server Error`: {"msg": 'Se produjo un error al intentar crear la canción.'}
        

* * *

### Actualizar una canción por su ID


Actualiza una canción existente en la base de datos mediante su identificador.



Actualiza una canción existente en la base de datos mediante su identificador.

*   **URL:** `/songs/:id`
*   **Método HTTP:** `PUT`
*   **Parámetros:**
    *   La solicitud debe incluir un cuerpo (body) en formato JSON con la siguiente estructura:
        *   `titulo` (string, opcional): nuevo título de la canción.
        *   `autor` (string, opcional): nuevo nombre del artista que interpreta la canción.
        *   `Urlfoto` (string, opcional): nueva URL de la imagen de portada de la canción.
        *   `duracion` (number, opcional): nueva duración en segundos de la canción.
        *   `etiquetas` (array de strings, opcional): nueva lista de etiquetas que describen la canción.
        *   `UrlCancion` (string, opcional): nueva URL del archivo de audio de la canción.
*   **Respuestas:**
    *   `200 OK`: La canción se actualizó correctamente.
        `{   "msg": "Canción actualizada correctamente" }`
        
    *   `400 Bad Request`: Se proporcionaron parámetros inválidos o faltantes.
    *   `404 Not Found`: No se encontró una canción con el identificador especificado.
    *   `500 Internal Server Error`: Se produjo un error al intentar actualizar la canción.


### Eliminar una canción por su ID

Este endpoint permite eliminar una canción de la base de datos utilizando su ID.

*   **URL:** `/songs/:id`
    
*   **Método HTTP:** `DELETE`
    
*   **Parámetros de URL:**
    
    *   `id` (obligatorio): ID de la canción a eliminar
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    

```
**Código:** 200 
{"mensaje": "Canción eliminada correctamente"}
```
*   **Respuesta de error:**
    *   **Código:** 404 (Not Found)
        
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Canción no encontrada"}`
        
    *   **Código:** 500 (Internal Server Error)
        
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al eliminar la canción"}`
        
\
\
\
\
\

Playlists
---------

### Compartir Playlist con un usuario

Este endpoint permite compartir una Playlist

*   **URL:** `/playlists/share`
*   **Método HTTP:** `POST`
*   **Headers:** Ninguno
*   **Headers:** Ninguno
*   **Body:** 

```
{
    "share": "alex@decibely.es",
    "receive": "luis@decibely.es",
    "identificador": "6458b8b63bdc4b000e65edc2"
}
```

*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
        `{ msg: 'Playlist compartida' }`
    
*   **Respuesta de error:**

    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta: (uno de todos)**
      
        `{ msg: 'Usuario no existente' }`
        `{ msg: 'Playlist no existente' }`
        `{"msg": "Hubo un error al compartir la Playlist"}`


    *   **Código:** 501 
    *   **Contenido del cuerpo de la respuesta:**
      
        `{ msg: 'Playlist ya compartida' }`
    
***

### Ver playlists compartidas a un usuario

Este endpoint permite ver las playlists compartidas

*   **URL:** `/playlists/share/:user`
*   **Método HTTP:** `GET`
*   **Parámetros de URL: `user` (obligatorio): Usuario del que obtener playlists que le han compartido
*   **Headers:** Ninguno
*   **Headers:** Ninguno
*   **Body:** Ninguno

*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta: (share: quien compartió la cancion)**
        `
        {
            "_id": "645e64ab52bf9a44d8690670",
            "share": "alex@decibely.es",
            "receive": "luis@decibely.es",
            "identificador": "6458b8b63bdc4b000e65edc2",
            "atributo": "p",
            "__v": 0
        }
        `
    
*   **Respuesta de error:**

    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta: (uno de todos)**
      
        `{ msg: 'Usuario no existente' }`
        `{"msg": "Hubo un error al compartir la Playlist"}`


    *   **Código:** 404
    *   **Contenido del cuerpo de la respuesta:**
      
        `{ msg: 'No se encontraron playlists' }`
    
***

### Buscar una playlist por una cadena

Este endpoint permite buscar una playlist por un string.

*   **URL:** `/playlists/find/:name`
*   **Método HTTP:** `GET`
*   **Parámetros de URL: `name` (obligatorio): Cadena a buscar en la base de playlists
*   **Headers:** Ninguno
*   **Headers:** Ninguno
*   **Body:** Ninguno

*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
    
    
`{
    "playlists": [
        {
            "autor": [],
            "canciones": [
                "6449b2a58bde4d2c080d1cd3",
                "6449b2a58bde4d2c080d1cd3",
                "6449b2a58bde4d2c080d1cd3"
            ],
            "etiquetas": [
                "Desgarrador",
                "Aluciflipante"
            ],
            "_id": "6449bd30a5accb3f4c761c8f",
            "titulo": "Télmides",
            "foto": "Fotografia",
            "__v": 0
        },
        {
            "autor": [],
            "canciones": [
                "6449b2a58bde4d2c080d1cd3",
                "6449b2a58bde4d2c080d1cd3"
            ],
            "etiquetas": [
                "Desgarrador",
                "Aluciflipante"
            ],
            "_id": "6449bd42a5accb3f4c761c95",
            "titulo": "Telmo",
            "foto": "Fotografia",
            "__v": 0
        }
    ]
}`
    
*   **Respuesta de error:**

    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:**
    
    
    `{"mensaje": "Hubo un error al buscar las playlists"}`
    
***

### Buscar una playlist por un tag

Este endpoint permite buscar una playlist por un string.

*   **URL:** `/playlists/find/tag/:tag`
*   **Método HTTP:** `GET`
*   **Parámetros de URL: `tag` (obligatorio): Tag a buscar en la base de playlists
*   **Headers:** Ninguno
*   **Headers:** Ninguno
*   **Body:** Ninguno

*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
    
    
`{
    "playlist": [
        {
            "autor": [
                "kray"
            ],
            "canciones": [
                "64582f2fb90b373e88912d4e"
            ],
            "etiquetas": [
                "louen"
            ],
            "_id": "6458b8b63bdc4b000e65edc2",
            "titulo": "Louen",
            "foto": "https://i.kym-cdn.com/photos/images/newsfeed/002/297/368/17f.jpg",
            "__v": 0
        },
        {
            "autor": [
                "oscar@decibely.es"
            ],
            "canciones": [
                "645920a3fc63f4000eb71bc3",
                "6459233dfc63f4000eb71bc8",
                "64592400fc63f4000eb71bcb"
            ],
            "etiquetas": [
                "Pop",
                "Rock",
                "Electrónica",
                "louen"
            ],
            "_id": "64593127fc63f4000eb71bed",
            "titulo": "Canciones para el trabajo",
            "foto": "https://syltec.es/blog/wp-content/uploads/2021/10/Dise%C3%B1o-sin-t%C3%ADtulo-8-1024x512.jpg",
            "__v": 0
        }
    ]
}`
    
*   **Respuesta de error:**

    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:**
    
    
    `{"mensaje": "Hubo un error al buscar las playlists"}`
    
***

### Obtener todas las playlists

Este endpoint permite obtener todas las playlists almacenadas en la base de datos.

*   **URL:** `/playlists`
    
*   **Método HTTP:** `GET`
    
*   **Parámetros de URL:** Ninguno
    
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**

```
{
        "autor": [
            {
                "_id": "oscar@decibely.es",
                "username": "Óscar"
            }
        ],
        "canciones": [
            "645920a3fc63f4000eb71bc3",
            "6459233dfc63f4000eb71bc8",
            "64592400fc63f4000eb71bcb"
        ],
        "etiquetas": [
            "Pop",
            "Rock",
            "Electrónica",
            "louen"
        ],
        "_id": "64593127fc63f4000eb71bed",
        "titulo": "Canciones para el trabajo",
        "foto": "https://syltec.es/blog/wp-content/uploads/2021/10/Dise%C3%B1o-sin-t%C3%ADtulo-8-1024x512.jpg",
        "__v": 0
},
 ...

```
*   **Respuesta de error:**
    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al obtener las playlists"}`
* * *
### Obtener una playlist por su ID

Este endpoint permite obtener una playlist específica por su ID.

*   **URL:** `/playlists/:id`
    
*   **Método HTTP:** `GET`
    
*   **Parámetros de URL:** `id` (string) - ID de la playlist a obtener.
    
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**

```

{
   "_id": "603b7a32a2887456547b9d21",
   "titulo": "Playlist 1",
   "foto": "https://example.com/playlis22.jpg"
    "autor": [
        {
            "_id": "kray",
            "username": "kray"
        }
    ],
   "canciones": [
       "603b7a32a2887456547b9d31",
       "603b7a32a2887456547b9d34"
   ],
   "etiquetas": [
       "pop",
       "chill"
   ],   
 },

`

```
*   **Respuesta de error:**
    *   **Código:** 404 (Not Found)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Playlist no encontrada"}`

* * *
### Crear una nueva playlist

Este endpoint permite crear una nueva playlist.

*   **URL:** `/playlists`
    
*   **Método HTTP:** `POST`
    
*   **Parámetros de URL:** Ninguno
    
*   **Headers:** `Content-Type: application/json`
    
*   **Body:**
   ``` 
{
   "titulo": "Playlist 1",
   "foto": "https://example.com/playlis22.jpg",
   "autor": "jaime@gmaill.com",
   "canciones": [
       "603b7a32a2887456547b9d31",
       "603b7a32a2887456547b9d34"
   ],
   "etiquetas": [
       "pop",
       "chill"
   ]   
 }
 ```

*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
    
```
    
  {
    "mensaje": "Playlist creada correctamente",
    "playlist": {
        "_id": "p2",
        "nombre": "Mi Playlist",
        "autor": "603b7a32a2887456547b9d33",
        "canciones": ["603b7a32a2887456547b9d22", "603b7a32a2887456547b9d11"]
    }
    
}
   ```
*   **Respuesta de error:**
    
    *   **Código:** 400 (Bad Request)
        
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Faltan campos obligatorios para crear la playlist"}`
        
    *   **Código:** 500 (Internal Server Error)
        
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al crear la playlist"}`
        
* * *
### Actualizar una playlist por su ID

Este endpoint permite actualizar una playlist existente.

*   **URL:** `/playlists/:id`
    
*   **Método HTTP:** `PUT`
    
*   **Parámetros de URL:**
    
    *   `id`: ID de la playlist a actualizar
*   **Headers:** `Content-Type: application/json`
    
*   **Body:**
    
```
    
   {
    "nombre": "Mi Playlist Actualizada",
    "canciones": ["603b7a32a2887456547b9d22"]
}

   ```
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
    
```
{
    "mensaje": "Playlist actualizada correctamente"
}
```


*   **Respuesta de error:**
    
    *   **Código:** 404 (Not Found)
        
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "La playlist no existe"}`
        
    *   **Código:** 500 (Internal Server Error)
        
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al actualizar la playlist"}`
* * *
### Eliminar una playlist por su ID

Este endpoint permite eliminar una playlist existente a partir de su ID.

*   **URL:** `/playlists/:id`
    
*   **Método HTTP:** `DELETE`
    
*   **Parámetros de URL:** `id` es el identificador de la playlist que se desea eliminar.
    
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
    
    ```
    {   "mensaje": "Playlist eliminada correctamente" }
    ```
    
*   **Respuesta de error:**
    
    *   **Código:** 404 (Not Found)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "La playlist no existe"}`
    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al eliminar la playlist"}`\
\
\
\
\
\

Albumes
---------

### Obtener todos los álbumes

Este endpoint permite obtener todos los álbumes almacenados en la base de datos.

*   **URL:** `/albums`
    
*   **Método HTTP:** `GET`
    
*   **Parámetros de URL:** Ninguno
    
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**

```
[ {
   "_id": "603b7a32a2887456547b9d41",
   "titulo": "Album 1",
   "autor": "603b7a32a2887456547b9d11",
   "foto": "https://example.com/album1.jpg",
   "canciones": ["603b7a32a2887456547b9d24", "603b7a32a2887456547b9d25"],
   
 },
   
   
{
   "_id": "603b7a32a2887456547b9d44",
   "titulo": "Album 2",
   "autor": "603b7a32a2887456547b9d11",
   "foto": "https://example.com/album2.jpg",
   "canciones": ["603b7a32a2887456547b9d24", "603b7a32a2887456547b9d25"],
   
 },
 ...
]
```



*   **Respuesta de error:**
    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al obtener los álbumes"}`
* * *
### Obtener un álbum por su ID

Este endpoint permite obtener un álbum en particular mediante su ID.

*   **URL:** `/albums/:id`
    
*   **Método HTTP:** `GET`
    
*   **Parámetros de URL:**
    
    *   `id` (String): ID del álbum a obtener.
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
```
{
  "_id": "603b7a32a2887456547b9d33",
  "titulo": "Album 1",
  "autor": "603b7a32a2887456547b9d11",
  "foto": "https://example.com/album1.jpg",
  "canciones": ["603b7a32a2887456547b9d22", "603b7a32a2887456547b9d23"],
  
}
```

*   **Respuesta de error:**
    *   **Código:** 404 (Not Found)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Álbum no encontrado"}`
    
* * *
### Crear un nuevo álbum

Este endpoint permite crear un nuevo álbum.

*   **URL:** `/albums`
    
*   **Método HTTP:** `POST`
    
*   **Parámetros de URL:** Ninguno
    
*   **Headers:**
    
*   **Body:**
    ```
    {
    "titulo": "Álbum 1",
    "artista": "603b7a32a2887456547b9d11",
    "Urlfoto": "https://example.com/album1.jpg",
    "canciones": ["603b7a32a2887456547b9d22", "603b7a32a2887456547b9d23"]
    }
    ```

    
*   **Respuesta exitosa:**
    
    *   **Código:** 201 (Created)
    *   **Contenido del cuerpo de la respuesta:**
    
    ```
    
    {     "mensaje": "Álbum creado correctamente" }
    ```
*   **Respuesta de error:**
    
    *   **Código:** 400 (Bad Request)
        
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Faltan campos obligatorios"}`
        
    *   **Código:** 500 (Internal Server Error)
        
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al crear el álbum"}`
        
* * *
### Actualizar un álbum por su ID

Este endpoint permite actualizar un álbum existente por su ID.

*   **URL:** `/albums/:id`
    
*   **Método HTTP:** `PUT`
    
*   **Parámetros de URL:**
    
    *   `id`: El ID del álbum a actualizar (string)
*   **Headers:**
    
    *   `Content-Type: application/json`
*   **Body:**
    
    ```
    {
    "titulo": "Álbum 1",
    "artista": "603b7a32a2887456547b9d11",
    "Urlfoto": "https://example.com/album1.jpg",
    "canciones": ["603b7a32a2887456547b9d22", "603b7a32a2887456547b9d23"]
}
    ```

*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
    
    ```
    {     "mensaje": "Álbum actualizado correctamente" }
    ```

*   **Respuesta de error:**
    
    *   **Código:** 404 (Not Found)
        
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Álbum no encontrado"}`
        
    *   **Código:** 500 (Internal Server Error)
        
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al actualizar el álbum"}`
* * *
### Eliminar un álbum por su ID

Este endpoint permite eliminar un álbum de la base de datos a través de su ID.

*   **URL:** `/albums/:id`
    
*   **Método HTTP:** `DELETE`
    
*   **Parámetros de URL:** `id` (string, obligatorio) - El ID del álbum a eliminar.
    
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
    
    ```
    {     "message": "Álbum eliminado correctamente" }
    ```
*   **Respuesta de error:**
    
    *   **Código:** 404 (Not Found)
    *   **Contenido del cuerpo de la respuesta:** `{"message": "Álbum no encontrado"}`
    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al eliminar el álbum"}`
\
\
\
\
\


Artistas
---------

### Buscar un artista por una cadena

Este endpoint permite buscar un artista por un string.

*   **URL:** `/artists/find/:name`
*   **Método HTTP:** `GET`
*   **Parámetros de URL: `name` (obligatorio): Cadena a buscar en la base de cantantes
*   **Headers:** Ninguno
*   **Headers:** Ninguno
*   **Body:** Ninguno

*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
    
    
` {
    "artists": [
        {
            "_id": "645446c23ccdeb2e5c664184",
            "nombre": "artist1",
            "Urlfoto": "https://www.shutterstock.com/image-vector/sea-waves-vintage-cartoon-ocean-600w-1022661748.jpg",
            "__v": 0
        },
        {
            "_id": "645446c83ccdeb2e5c664186",
            "nombre": "artist2",
            "Urlfoto": "https://www.shutterstock.com/image-vector/sea-waves-vintage-cartoon-ocean-600w-1022661748.jpg",
            "__v": 0
        }
    ]
}`
    
*   **Respuesta de error:**

    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:**
    
    
    `{"mensaje": "Hubo un error al buscar los artistas"}`
    
***

### Obtener todos los artistas

Este endpoint permite obtener todos los artistas almacenados en la base de datos.

*   **URL:** `/artists`
    
*   **Método HTTP:** `GET`
    
*   **Parámetros de URL:** Ninguno
    
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**

```
[ {
   "_id": "603b7a32a2887456547b9d22",
   "nombre": "Artista 1",
   "Urlfoto": "https://example.com/artista2.jpg",
 },
   
{
   "_id": "603b7a32a2887456547b9d22",
   "nombre": "Artista 2",
   "Urlfoto": "https://example.com/artista2.jpg",
 },
 ...
]
```




*   **Respuesta de error:**
    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al obtener los artistas"}`
* * *
### Obtener un artista por su ID

Este endpoint permite obtener un artista por su ID.

*   **URL:** `/artists/:id`
    
*   **Método HTTP:** `GET`
    
*   **Parámetros de URL:**
    
    *   `id`: Identificador único del artista (_String_)
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
```
{
   "_id": "603b7a32a2887456547b9d11",
   "nombre": "Artista 1",
   "Urlfoto": "https://example.com/artista1.jpg",
}
```

*   **Respuesta de error:**
    *   **Código:** 404 (Not Found)
    *   **Contenido del cuerpo de la respuesta:** `msg: 'Artista no encontrado'`
    *   **Código:** 500 (SRVR error)
    *   **Contenido del cuerpo de la respuesta:** `"mensaje": "Hubo un error al obtener el artista"`
* * *
### Crear un nuevo artista

Este endpoint permite crear un nuevo artista y almacenarlo en la base de datos.

*   **URL:** `/artists`
*   **Método HTTP:** `POST`
*   **Parámetros de URL:** Ninguno
*   **Headers:** `Content-Type: application/json`
*   **Body:** Objeto JSON que contiene los datos del artista a crear:


```
{
   "nombre": "Nombre del artista",
   "Urlfoto": "https://example.com/foto.jpg",
}


```
*   **Respuesta exitosa:**
    
    *   **Código:** 201 (Created)
    *   **Contenido del cuerpo de la respuesta:**

```
{
   "mensaje": "Artista creado correctamente",
   "artista": {
       "_id": "60759b9a6b7d4e4e784b4ef6",
       "nombre": "Nombre del artista",
       "Urlfoto": "https://example.com/foto.jpg",
    
   }
}

```

*   **Respuesta de error:**
    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al crear el artista"}`
* * *
### Actualizar un artista por su ID

Este endpoint permite actualizar los datos de un artista específico en la base de datos.

*   **URL:** `/artists/:id`
    
*   **Método HTTP:** `PUT`
    
*   **Parámetros de URL:**
    
    `id` (obligatorio): ID del artista a actualizar.
    
*   **Headers:** `Content-Type: application/json`
    
*   **Body:** Objeto JSON que contiene los nuevos datos del artista:
    
```
{
   "nombre": "Nuevo nombre del artista",
   "Urlfoto": "https://example.com/nuevafoto.jpg",
}
```


*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
```
{
   "mensaje": "Artista actualizado correctamente",
   "artista": {
       "nombre": "Nuevo nombre del artista",
       "Urlfoto": "https://example.com/nuevafoto.jpg",
   }
}
```

*   **Respuesta de error:**
    *   **Código:** 404 (Not Found)
        
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Artista no encontrado"}`
        
    *   **Código:** 500 (Internal Server Error)
        
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al actualizar el artista"}`
* * *
### Eliminar un artista por su ID

Este endpoint permite eliminar un artista de la base de datos por su ID.

*   **URL:** `/artists/:id`
    
*   **Método HTTP:** `DELETE`
    
*   **Parámetros de URL:**
    
    *   `id` (obligatorio) - El ID del artista que se desea eliminar
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Artista eliminado correctamente"}`
*   **Respuesta de error:**
    
    *   **Código:** 404 (Not Found)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Artista no encontrado"}`
    
    o
    
    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al eliminar el artista"}`
* * *
### Obtener todas las canciones de un artista

Este endpoint permite obtener todas las canciones de un mismo artista de la base de datos

*   **URL:** `/artists/:id/songs`

*   **Método HTTP:** `GET`

*   **Parámetros de URL:**

    *   `id` (obligatorio) - El ID del artista del que se desea obtener todas las canciones
*   **Headers:** Ninguna

*   **Body:** Ninguno

*   **Respuesta exitosa:**

    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta: **

```
[ {
   "_id": "603b7a32a2887456547b9d22",
   "titulo": "Canción 1",
   "autor": "603b7a32a2887456547b9d00",
   "Urlfoto": "https://example.com/artista1.jpg",
   "duracion": "128"
   "etiquetas": ["etiqueta1", "etiqueta2"],
   "UrlCancion": "https://example.com/cancion1.jpg"
 },
   
{
   "_id": "603b7a32a2887456547b9d23",
   "titulo": "Canción 2",
   "autor": "603b7a32a2887456547b9d01",
   "Urlfoto": "https://example.com/artista2.jpg",
   "duracion": "128"
   "etiquetas": ["etiqueta1", "etiqueta2"],
   "UrlCancion": "https://example.com/cancion2.jpg"
 },
 ...
]

```
\
\
\
\
\

Carpetas
---------

### Obtiene todas las carpetas

Este endpoint permite obtener todas las carpetas almacenadas en la base de datos.

*   **URL:** `/folders`
    
*   **Método HTTP:** `GET`
    
*   **Parámetros de URL:** Ninguno
    
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
```
[ {
    "_id": "603b7a32a2887456547b9d22",
    "nombre": "Carpeta 1",
    "playlists": ["603b7a32a2887456547b9d22", "603b7a32a2887456547b9d55"],
  },
    
    
 {
    "_id": "603b7a32a2887456547b9d22",
    "nombre": "Carpeta 2",
    "playlists": ["603b7a32a2887456547b9d22", "603b7a32a2887456547b9d55"],
  },
  ...
]
```

*   **Respuesta de error:**
    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al obtener las carpetas"}`
* * *
### Obtiene una carpeta por su ID

Este endpoint permite obtener una carpeta específica a partir de su ID.

*   **URL:** `/folders/:id`
    
*   **Método HTTP:** `GET`
    
*   **Parámetros de URL:**
    
    `id`: String que representa el ID de la carpeta.
    
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
```
{
  "_id": "603b7a32a2887456547b9d22",
  "nombre": "Carpeta 1",
  "playlists": ["603b7a32a2887456547b9d33", "603b7a32a2887456547b9d44"],
}
```

*   **Respuesta de error:**
    *   **Código:** 404 (Not Found)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "La carpeta con ese ID no existe"}`
    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al obtener la carpeta"}`

\
\
\
\
\
* * *
### Crear una nueva carpeta

Este endpoint permite crear una nueva carpeta en la base de datos.

*   **URL:** `/folders`
    
*   **Método HTTP:** `POST`
    
*   **Parámetros de URL:** Ninguno
    
*   **Headers:** Ninguno
    
*   **Body:**

```    
{
    "nombre": "Nombre de la carpeta",
    "playlists": ["603b7a32a2887456547b9d33", "603b7a32a2887456547b9d44"]
}
``` 

*   **Respuesta exitosa:**
    
    *   **Código:** 201 (Created)
    *   **Contenido del cuerpo de la respuesta:**
 ```  
	{
	 "_id": "603b7a32a2887456547b9d22",
	 "nombre": "Carpeta 1",
	 "playlists": ["603b7a32a2887456547b9d33", "603b7a32a2887456547b9d44"],
	}
```
    
*   **Respuesta de error:**
    
    *   **Código:** 400 (Bad Request)
    *   **Contenido del cuerpo de la respuesta:**    
    `{"mensaje": "Faltan campos obligatorios para crear la carpeta"}`
    
    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al crear la carpeta"}`
* * *
### Actualizar una carpeta existente por su ID

Este endpoint permite actualizar una carpeta existente en la base de datos.

*   **URL:** `/folders/:id`
    
*   **Método HTTP:** `PUT`
    
*   **Parámetros de URL:**
    
    *   `id` - ID de la carpeta a actualizar
*   **Headers:** Ninguno
    
*   **Body:**
    
    ```   
    {
	    "nombre": "Nuevo nombre de la carpeta"
	}
    ```

    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
```   
	{
	 "_id": "603b7a32a2887456547b9d22",
	 "nombre": "Nuevo nombre de la carpeta",
	 "playlists": ["603b7a32a2887456547b9d33", "603b7a32a2887456547b9d44"],
	}
```
    
*   **Respuesta de error:**
    
    *   **Código:** 404 (Not Found)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "No se encontró la carpeta especificada"}`
    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al actualizar la carpeta"}`
* * *
### Eliminar una carpeta por su ID

Este endpoint permite eliminar una carpeta existente en la base de datos.

*   **URL:** `/folders/:id`
    
*   **Método HTTP:** `DELETE`
    
*   **Parámetros de URL:**
    
    *   `id` (obligatorio): Identificador único de la carpeta que se desea eliminar.
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
        
    `{     "mensaje": "Carpeta eliminada exitosamente" }`
    
*   **Respuesta de error:**
    
    *   **Código:** 404 (Not Found)
    *   **Contenido del cuerpo de la respuesta:**
    
    
    `{     "mensaje": "No se encontró la carpeta solicitada" }`
    
    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:**
        
    `{     "mensaje": "Hubo un error al eliminar la carpeta" }`
\
\
\
\
\

Podcasts
---------

### Obtiene todos los podcasts

Este endpoint permite obtener todos los podcasts almacenados en la base de datos.

*   **URL:** `/podcasts`
    
*   **Método HTTP:** `GET`
    
*   **Parámetros de URL:** Ninguno
    
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**

```
[  
{  "_id":  "6169be9b8d760b1a6a20a6e6",  
	"titulo":  "Consultas avanzadas en MongoDB",  
	"autor":  "Juan Pérez",  
	"descripcion":  "En esta lección aprenderás cómo hacer consultas avanzadas en MongoDB",  
	"duracion":  90,  
	"numCapitulo":  1169be9b8d760b1a6a20a6e6,1169be9b8d760b1a6a20a6e6,1169be9b8d760b1a6a20a6e6  
	"UrlPodcast":  "https://ejemplo.com/mongodb-consultas-avanzadas"  },  

{  
	"_id":  "6169be9b8d760b1a6a20a6e6",  
	"titulo":  "Consultas avanzadas en MongoDB",  
	"autor":  "Juan Pérez",  
	"descripcion":  "En esta lección aprenderás cómo hacer consultas avanzadas en MongoDB",  
	"duracion":  90,  
	"capitulos":  1169be9b8d760b1a6a20a6e6, 6169be9b8d760b1a6a20a6e6, 
	"UrlPodcast":  "https://ejemplo.com/mongodb-consultas-	avanzadas"  },  
...]
```

*   **Respuesta de error:**
    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al obtener los podcasts"}`

* * *
* * *
### Obtiene un podcast por su ID

Este endpoint permite obtener un podcast específico de la base de datos, utilizando su ID.

*   **URL:** `/podcasts/:id`
    
*   **Método HTTP:** `GET`
    
*   **Parámetros de URL:**
    
    *   `id`: ID del podcast a obtener.
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**

```
	{  
	"_id":  "6169be9b8d760b1a6a20a6e6",  
	"titulo":  "Consultas avanzadas en MongoDB",  
	"autor":  "Juan Pérez",  
	"descripcion":  "En esta lección aprenderás cómo hacer consultas avanzadas en MongoDB",  
	"duracion":  90,  
	"capitulos":  1169be9b8d760b1a6a20a6e6, 6169be9b8d760b1a6a20a6e6, 
	"UrlPodcast":  "https://ejemplo.com/mongodb-consultas-	avanzadas"  }
}
```

*   **Respuesta de error:**
    
    *   **Código:** 404 (Not Found)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Podcast no encontrado"}`
    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al obtener el podcast"}`


* * *
### Obtiene podcasts por su nombre

Este endpoint permite obtener todos los podcast que tengan el mismo nombre

*   **URL:** `/podcasts/byName/:nombre`
    
*   **Método HTTP:** `GET`
    
*   **Parámetros de URL:**
    
    *   `nombre`: Nombre del podcast o podcasts a obtener.
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**

```
[
	{  
	"_id":  "6169be9b8d760b1a6a20a6e6",  
	"titulo":  "Consultas avanzadas en MongoDB",  
	"autor":  "Juan Pérez",  
	"descripcion":  "En esta lección aprenderás cómo hacer consultas avanzadas en MongoDB",  
	"duracion":  90,  
	"capitulos":  1169be9b8d760b1a6a20a6e6, 6169be9b8d760b1a6a20a6e6, 
	"UrlPodcast":  "https://ejemplo.com/mongodb-consultas-	avanzadas"  
    },

    {  
	"_id":  "6169be9b8d760b1a6a20a6e7",  
	"titulo":  "Consultas avanzadas en MongoDB",  
	"autor":  "María Izaguirre",  
	"descripcion":  "Aprende MongoDB en mucho menos tiempo",  
	"duracion":  60,  
	"capitulos":  1169be9b8d760b1a6a20a6e6, 6169be9b8d760b1a6a20a6e6, 
	"UrlPodcast":  "https://ejemplo.com/mongodb-consultas-	avanzadas"  
    }
]
```

*   **Respuesta de error:**
    
    *   **Código:** 404 (Not Found)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "No existen podcasts con ese nombre"}`
    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al obtener los podcasts"}`

* * *

### Obtiene podcasts por su autor

Este endpoint permite obtener todos los podcast que tengan el mismo autor

*   **URL:** `/podcasts/byAuthor/:autor`
    
*   **Método HTTP:** `GET`
    
*   **Parámetros de URL:**
    
    *   `autor`: Autor del podcast o podcasts a obtener.
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**

```
[
	{  
	"_id":  "6169be9b8d760b1a6a20a6e6",  
	"titulo":  "Consultas avanzadas en MongoDB",  
	"autor":  "Juan Pérez",  
	"descripcion":  "En esta lección aprenderás cómo hacer consultas avanzadas en MongoDB",  
	"duracion":  90,  
	"capitulos":  1169be9b8d760b1a6a20a6e6, 6169be9b8d760b1a6a20a6e6, 
	"UrlPodcast":  "https://ejemplo.com/mongodb-consultas-	avanzadas"  
    },

    {  
	"_id":  "6169be9b8d760b1a6a20a6e7",  
	"titulo":  "Consultas avanzadas en SQLite",  
	"autor":  "Juan Pérez",  
	"descripcion":  "En esta lección aprenderás cómo hacer consultas avanzadas en SQLite",  
	"duracion":  60,  
	"capitulos":  1169be9b8d760b1a6a20a6e6, 6169be9b8d760b1a6a20a6e6, 
	"UrlPodcast":  "https://ejemplo.com/mongodb-consultas-	avanzadas"  
    }
]
```
* * *
*   **Respuesta de error:**
    
    *   **Código:** 404 (Not Found)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "No existen podcasts con ese nombre"}`
    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al obtener los podcasts"}`

* * *

### Crea un nuevo podcast

Este endpoint permite crear un nuevo podcast.

*   **URL:** `/podcasts`
*   **Método HTTP:** `POST`
*   **Parámetros de URL:** Ninguno
*   **Headers:** Ninguno
*   **Body:**
```
	{   
	"titulo":  "Consultas avanzadas en MongoDB",  
	"autor":  "Juan Pérez",  
	"descripcion":  "En esta lección aprenderás cómo hacer consultas avanzadas en MongoDB",  
	"duracion":  90,  
	"capitulos":  ["1169be9b8d760b1a6a20a6e6", "6169be9b8d760b1a6a20a6e6"],
	"UrlPodcast":  "https://ejemplo.com/mongodb-consultas-avanzadas"  
    }

```

*   **Respuesta exitosa:**
    
    *   **Código:** 201 (Creado)
    *   **Contenido del cuerpo de la respuesta:**
    
```
{
  "mensaje": "Podcast creado exitosamente",
  "podcast": {  
	"_id":  "6169be9b8d760b1a6a20a6e6",  
	"titulo":  "Consultas avanzadas en MongoDB",  
	"autor":  "Juan Pérez",  
	"descripcion":  "En esta lección aprenderás cómo hacer consultas avanzadas en MongoDB",  
	"duracion":  90,  
	"capitulos":  1169be9b8d760b1a6a20a6e6, 6169be9b8d760b1a6a20a6e6, 
	"UrlPodcast":  "https://ejemplo.com/mongodb-consultas-	avanzadas"  }
}
}
```
    
*   **Respuesta de error:**
    
    *   **Código:** 400 (Solicitud incorrecta)
        
    *   **Contenido del cuerpo de la respuesta:** `{ "mensaje": "Canciones no existentes proporcionadas" }`
        
    *   **Código:** 500 (Error interno del servidor)
        
    *   **Contenido del cuerpo de la respuesta:** `{ "mensaje": "Hubo un error al crear el podcast" }`
        

* * *

### Actualiza un podcast existente por su ID

Este endpoint permite actualizar un podcast existente identificado por su ID.

*   **URL:** `/podcasts/:id`
*   **Método HTTP:** `PUT`
*   **Parámetros de URL:**
    *   `id` - ID del podcast a actualizar
*   **Headers:** Ninguno
*   **Body:**

```
{  
	"titulo":  "Consultas avanzadas en MongoDB",  
	"autor":  "Juan Pérez",  
	"descripcion":  "En esta lección aprenderás cómo hacer consultas avanzadas en MongoDB",  
	"duracion":  90,  
	"capitulos":  ["1169be9b8d760b1a6a20a6e6", "6169be9b8d760b1a6a20a6e6"],
	"UrlPodcast":  "https://ejemplo.com/mongodb-consultas-avanzadas"  
}

```

*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**

```
{
  "mensaje": "Podcast actualizado exitosamente",
  "podcast": {  "_id":  "6169be9b8d760b1a6a20a6e6",  
	"titulo":  "Consultas avanzadas en MongoDB",  
	"autor":  "Juan Pérez",  
	"descripcion":  "En esta lección aprenderás cómo hacer consultas avanzadas en MongoDB",  
	"duracion":  90,  
	"capitulos":  1169be9b8d760b1a6a20a6e6, 6169be9b8d760b1a6a20a6e6, 
	"UrlPodcast":  "https://ejemplo.com/mongodb-consultas-	avanzadas"  }
}
```

    
*   **Respuesta de error:**
    
    *   **Código:** 404 (Solicitud incorrecta)
    *   **Contenido del cuerpo de la respuesta:** \`{ "message": 'Podcast no encontrado' }
        *   **Código:** 500 (Solicitud incorrecta)
    *   **Contenido del cuerpo de la respuesta:** \`{ "mensaje": "Hubo un error al crear el podcast" }
* * *
### Eliminar un podcast existente por su ID

Este endpoint permite eliminar un podcast existente de la base de datos por su ID.

*   **URL:** `/podcasts/:id`
    
*   **Método HTTP:** `DELETE`
    
*   **Parámetros de URL:**
    
    *   `id` (obligatorio): ID del podcast a eliminar.
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
    
    `{   "mensaje": "Podcast eliminado exitosamente" }`
    
*   **Respuesta de error:**
    
    *   **Código:** 404 (Not Found)
        
    *   **Contenido del cuerpo de la respuesta:** `{ "mensaje" : "Podcast no encontrado" }`
        
    *   **Código:** 500 (Internal Server Error)
        
    *   **Contenido del cuerpo de la respuesta:** `{ "mensaje" : "Error al eliminar el podcast" }`
\
\
\
\
\

Capitulos
---------

### Obtener todos los capítulos

Este endpoint permite obtener todos los capítulos almacenados en la base de datos.

*   **URL:** `/chapters`
    
*   **Método HTTP:** `GET`
    
*   **Parámetros de URL:** Ninguno
    
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
* 
```
[ {
  "_id": "6169be9b8d760b1a6a20a6e5",
  "titulo": "Instalacion de MongoDB",
  "autor": "Juan Pérez",
  "descripcion": "Instalacion",
  "duracion": 120,
  "numCapitulo": 1,
  "UrlPodcast": "https://ejemplo.com/mongodb-instalacion"
}
,     

 {
  "_id": "6169be9b8d760b1a6a20a6e5",
  "titulo": "Depuracion de MongoDB",
  "autor": "Juan Pérez",
  "descripcion": "Depuracion",
  "duracion": 120,
  "numCapitulo": 2,
  "UrlPodcast": "https://ejemplo.com/mongodb-Depuracion"
}, ...]

```


*   **Respuesta de error:**
    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al obtener los capítulos"}`
* * *
### Obtener un capítulo por su ID

Este endpoint permite obtener un capítulo específico por su ID.

*   **URL:** `/chapters/:id`
    
*   **Método HTTP:** `GET`
    
*   **Parámetros de URL:**
    
    *   `id`: ID del capítulo a obtener.
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
```
{
  "_id": "6169be9b8d760b1a6a20a6e5",
  "titulo": "Instalacion de MongoDB",
  "autor": "Juan Pérez",
  "descripcion": "Instalacion",
  "duracion": 120,
  "numCapitulo": 1,
  "UrlPodcast": "https://ejemplo.com/mongodb-instalacion"
}
```
*   **Respuesta de error:**
    *   **Código:** 404 (Not Found)
        
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "El capítulo solicitado no existe"}`
        
    *   **Código:** 500 (Internal Server Error)
        
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al obtener el capítulo solicitado"}`
   * * *     
### Crea un nuevo capítulo

Este endpoint permite crear un nuevo capítulo.

*   **URL:** `/chapters`
*   **Método HTTP:** `POST`
*   **Parámetros de URL:** Ninguno
*   **Headers:** Ninguno
*   **Body:**
```
{
  "titulo": "Instalacion de MongoDB",
  "autor": "Juan Pérez",
  "descripcion": "Instalacion",
  "duracion": 120,
  "numCapitulo": 1,
  "UrlPodcast": "https://ejemplo.com/mongodb-instalacion"
}
```

*   **Respuesta exitosa:**
    
    *   **Código:** 201 (Created)
    *   **Contenido del cuerpo de la respuesta:**
```
{
  "_id": "6169be9b8d760b1a6a20a6e5",
  "titulo": "Instalacion de MongoDB",
  "autor": "Juan Pérez",
  "descripcion": "Instalacion",
  "duracion": 120,
  "numCapitulo": 1,
  "UrlPodcast": "https://ejemplo.com/mongodb-instalacion"
}
```

*   **Respuesta de error:**
    
    *   **Código:** 500 (Bad Request)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al crear el capítulo"}`
* * *
### Actualiza un capítulo existente por su ID

Este endpoint permite actualizar un capítulo existente por su ID.

*   **URL:** `/chapters/:id`
    
*   **Método HTTP:** `PUT`
    
*   **Parámetros de URL:**
    
    *   `id`: ID del capítulo que se desea actualizar.
*   **Headers:** Ninguno
    
*   **Body:**
    

```
{
  "_id": "6169be9b8d760b1a6a20a6e5",
  "titulo": "Instalacion de MongoDB",
  "autor": "Juan Pérez",
  "descripcion": "Instalacion",
  "duracion": 120,
  "numCapitulo": 1,
  "UrlPodcast": "https://ejemplo.com/mongodb-instalacion"
}

}
```
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
```
{
  "_id": "6169be9b8d760b1a6a20a6e5",
  "titulo": "Instalacion de MongoDB",
  "autor": "Juan Pérez",
  "descripcion": "Instalacion",
  "duracion": 120,
  "numCapitulo": 1,
  "UrlPodcast": "https://ejemplo.com/mongodb-instalacion"
}
```
*   **Respuesta de error:**
    
    *   **Código:** 404 (Bad Request)
    *   **Contenido del cuerpo de la respuesta:** ` message: 'Capitulo no encontrado' `
* * *

    
    *   **Código:** 500 (Bad Request)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al actualizar el capítulo"}`
* * *
* * *
### Eliminar un capítulo por su ID

Este endpoint permite eliminar un capítulo existente en la base de datos por su ID.

*   **URL:** `/chapters/:id`
    
*   **Método HTTP:** `DELETE`
    
*   **Parámetros de URL:**
    
       *   `id`: ID del capítulo que se desea eliminar.
    
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
        
    *   **Contenido del cuerpo de la respuesta:**
        

        
        `{     "mensaje": "El capítulo fue eliminado exitosamente." }`
        
*   **Respuesta de error:**
    
    *   **Código:** 404 (Not Found)
        
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "No se encontró el capítulo con el ID especificado."}`
        
    *   **Código:** 500 (Internal Server Error)
        
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al eliminar el capítulo."}`
\
\
\
\
\

Notificaciones
---------

### Obtener todas las notificaciones de un usuario

Este endpoint permite obtener todas las notificaciones de un usuario en particular.

*   **URL:** `/notifications/:userId`
    
*   **Método HTTP:** `GET`
    
*   **Parámetros de URL:**
    
    `userId` : El ID del usuario cuyas notificaciones se quieren obtener. Debe ser una cadena de caracteres alfanuméricos.
    
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
```
[{
  "_id": "6169cf1a857d8825a5a5bf5d",
  "user": "6169cd9e8d760b1a6a20a6f5",
  "message": "Pedro ha comenzado a seguirte",
  "created_at": "2022-05-12T18:30:00.000Z"
}
,
   
{
  "_id": "6169cf1a857d8825a5a5bf5d",
  "user": "6169cd9e8d760b1a6a20a6f5",
  "message": "Pedro ha comenzado a seguirte",
  "created_at": "2022-05-12T18:30:00.000Z"
},
 ...
]
```

*   **Respuesta de error:**
    *   **Código:** 404 (Not Found)
    *   **Contenido del cuerpo de la respuesta:** `{ mensaje: 'Usuario no existe' }`
  
    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al obtener las notificaciones del usuario"}`
* * *
### Obtener una notificación por su ID

Este endpoint permite obtener una notificación específica por su ID.

*   **URL:** `/notifications/:id`
    
*   **Método HTTP:** `GET`
    
*   **Parámetros de URL:**
    
    `id` : El ID de la notificación que se quiere obtener. Debe ser una cadena de caracteres alfanuméricos.
    
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**

```
[  
    {
  "_id": "6169cf1a857d8825a5a5bf5d",
  "user": "6169cd9e8d760b1a6a20a6f5",
  "message": "Pedro Lopez ha comenzado a seguirte",
  "created_at": "2022-05-12T18:30:00.000Z"
},  
    {
  "_id": "6169cf1a857d8825a5a5bf5d",
  "user": "6169cd9e8d760b1a6a20a6f5",
  "message": "Jaime Sanchez ha comenzado a seguirte",
  "created_at": "2022-05-12T18:30:00.000Z"
},  ...]
```

*   **Respuesta de error:**
    *   **Código:** 404 (Not Found)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "La notificación no existe"}`


* * *
### Obtener todas las notificaciones de un usuario

Este endpoint permite obtener todas las notificaciones de un usuario.

*   **URL:** `/notifications/:userId`
    
*   **Método HTTP:** `GET`
    
*   **Parámetros de URL:** `userId` (obligatorio) - El ID del usuario del que se quieren obtener las notificaciones.
    
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**

```
 {
  "_id": "6169cf1a857d8825a5a5bf5d",
  "user": "6169cd9e8d760b1a6a20a6f5",
  "message": "Jaime Sanchez ha comenzado a seguirte",
  "created_at": "2022-05-12T18:30:00.000Z"
}

```

*   **Respuesta de error:**
    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al obtener las notificaciones"}`
* * *
### Obtener una notificación por su ID

Este endpoint permite obtener una notificación por su ID.

*   **URL:** `/notifications/:id`
    
*   **Método HTTP:** `GET`
    
*   **Parámetros de URL:** `id` (obligatorio) - El ID de la notificación que se quiere obtener.
    
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
```
 {
  "_id": "6169cf1a857d8825a5a5bf5d",
  "user": "6169cd9e8d760b1a6a20a6f5",
  "message": "Jaime Sanchez ha comenzado a seguirte",
  "created_at": "2022-05-12T18:30:00.000Z"
}
```

*   **Respuesta de error:**
    *   **Código:** 404 (Not Found)
        
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "No se encontró la notificación con el ID proporcionado"}`
        
    *   **Código:** 500 (Internal Server Error)
* * *

### Crear una nueva notificación

Este endpoint permite crear una nueva notificación.

*   **URL:** `/notifications`
    
*   **Método HTTP:** `POST`
    
*   **Parámetros de URL:** Ninguno
    
*   **Headers:** Ninguno
    
*   **Body:** Debe incluir los siguientes campos:
    *   `user` (ObjectId, requerido): Identificador del usuario al que se le enviará la notificación.
    *   `message` (String, requerido): Mensaje que contiene la notificación.
.
*   **Respuesta exitosa:**
    
    *   **Código:** 201 (Created)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Notificación creada correctamente"}`
*   **Respuesta de error:**
    
    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al crear la notificación"}` OR `{ mensaje: 'Usuario 1 no existe' }` OR `{ mensaje: 'Usuario 2 no existe' }`
* * *
### Actualizar una notificación existente

Este endpoint permite actualizar una notificación existente.

*   **URL:** `/notifications/:id`
    
*   **Método HTTP:** `PUT`
    
*   **Parámetros de URL:** `id` (String, requerido): Identificador de la notificación a actualizar.
    
*   **Headers:** Ninguno
    
*   **Body:** Debe incluir al menos uno de los siguientes campos a actualizar:
    
    *   `user` (ObjectId): Identificador del usuario al que se le enviará la notificación.
    *   `message` (String): Mensaje que contiene la notificación.
    *   `created_at` (String): Fecha de creación de la notificación en formato "YYYY-MM-DDTHH:mm:ss.sssZ".
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Notificación actualizada correctamente"}`
*   **Respuesta de error:**
    
    *   **Código:** 404 (Not Found)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Notificación no encontrada"}`

* * *
### Eliminar una notificación existente

Este endpoint permite eliminar una notificación existente en la base de datos.

*   **URL:** `/notifications/:id`
    
*   **Método HTTP:** `DELETE`
    
*   **Parámetros de URL:**
    
    *   `id`: Identificador único de la notificación a eliminar.
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
    
    
    `{"mensaje": "Notificación eliminada exitosamente"}`
    as
*   **Respuesta de error:**
    
    *   **Código:** 404 (Not Found)
        
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "No se encontró la notificación especificada"}`
        
    *   **Código:** 500 (Internal Server Error)
        
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al eliminar la notificación"}`
\
\
\
\
\
### Eliminar todas las notificaciones de un usuario

Este endpoint permite las notificaciones de un determinado usuario

*   **URL:** `/notifications/user/:id`
    
*   **Método HTTP:** `DELETE`
    
*   **Parámetros de URL:**
    
    *   `id`: Identificador único de la notificación a eliminar.
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
    
    
    `{ mensaje: 'Notificaciones eliminadas exitosamente.' }`
    
*   **Respuesta de error:**
    
    *   **Código:** 404 (Not Found)
        
    *   **Contenido del cuerpo de la respuesta:** `{ mensaje: 'Usuario no encontrado' }`
        
    *   **Código:** 500 (Internal Server Error)
        
    *   **Contenido del cuerpo de la respuesta:** `{ mensaje: 'Error al eliminar las notificaciones.' }`
\
\
\
\
\

Usuario
---------
### Buscar un usuario por una cadena

Este endpoint permite buscar los usuarios que coinciden con una determinada cadena

*   **URL:** `/users/find/:username`
*   **Método HTTP:** `GET`
*   **Parámetros de URL: `username` (obligatorio): Cadena a buscar en la base de usuarios
*   **Headers:** Ninguno
*   **Headers:** Ninguno
*   **Body:** Ninguno

*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
    
    
`{
    "usuarios": [
        {
            "canciones": [],
            "albumes": [],
            "cancionesfav": [],
            "playlists": [],
            "artistas": [],
            "carpetas": [],
            "seguidos": [],
            "seguidores": [],
            "podcasts": [],
            "_id": "asdasdasdad",
            "username": "Oscar",
            "password": "$2b$10$KCZkkQQ3VAzqkVnr969w.ecS5GVAo0SRnKffaOBnV9xyU1Z6LzFqu",
            "indicador": "Playlist",
            "momento_audio": 0,
            "ultimo_audio": "64583522e62ce8000ed1a569",
            "ultimo_conjunto_audio": "6459332efc63f4000eb71bfc",
            "__v": 0
            
    
    
        },
        {
            "canciones": [],
            "albumes": [],
            "cancionesfav": [],
            "playlists": [],
            "artistas": [],
            "carpetas": [],
            "seguidos": [],
            "seguidores": [],
            "podcasts": [],
            "_id": "asdasdasdaaffaaffad",
            "username": "Oscar Beltrán",
            "password": "$2b$10$.g96TkPLIYkebCpiXo3GB.x8JSJD7SbPI1Te4JhavGnEhCYkfifx6",
            "indicador": "Playlist",
            "momento_audio": 0,
            "ultimo_audio": "64583522e62ce8000ed1a569",
            "ultimo_conjunto_audio": "6459332efc63f4000eb71bfc",
            "__v": 0
        }
    ]
}`
    
*   **Respuesta de error:**

    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:**
    
    
    `{"mensaje": "Hubo un error al buscar los usuarios"}`
    
***

### Registrar un usuario

Este endpoint permite registrar un nuevo usuario en el sistema.

*   **URL:** `/register`
*   **Método HTTP:** `POST`
*   **Parámetros de URL:** Ninguno
*   **Headers:** Ninguno
*   **Body:** 


```
{
    "username": "Juan lopez",
    "_id": "juan123@example.com",
    "password": "mypassword123"
}
```

*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
    
    
    `{   "mensaje": "Usuario registrado exitosamente" }`
    
*   **Respuesta de error:**
    
    *   **Código:** 400 (Bad Request)
    *   **Contenido del cuerpo de la respuesta:**
    
    
    `{ msg: 'El usuario ya existe' }`
    
    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:**
    
    
    `{"mensaje": "Hubo un error al registrar el usuario"}`
    
***

### Login de un usuario

Este endpoint permite autenticar a un usuario en el sistema.

*   **URL:** `/login`
*   **Método HTTP:** `POST`
*   **Parámetros de URL:** Ninguno
*   **Headers:** Ninguno
*   **Body:** JSON con los siguientes campos:


`{   "_id": "Correo electrónico del usuario",   "password": "Contraseña del usuario" }`

*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
    
    
    `{ "mensaje": "Se ha registrado el usuario" }`
    
*   **Respuesta de error:**

    *   **Código:** 401 (Unauthorized)
    *   **Contenido del cuerpo de la respuesta:**
    
    
    `{"mensaje": "Credenciales inválidas"}`
    
    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:**
    
    
    `{"mensaje": "Hubo un error al autenticar al usuario"}`

   ***
   
### Obtener todos los usuarios

Este endpoint permite obtener todos los usuarios almacenados en la base de datos.

*   **URL:** `/users`
    
*   **Método HTTP:** `GET`
    
*   **Parámetros de URL:** Ninguno
    
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**

```
[ 
    {
    "username": "Juan Sanchez",
    "_id": "juan123@example.com",
    "password": "mypassword123",
    "Urlfoto": "https://example.com/juan123/profile.jpg",
    "albumes": ["613f6f160eb7e5502116a491", "613f6f160eb7e5502116a492"],
    "cancionesfav": ["613f6f160eb7e5502116a493", "613f6f160eb7e5502116a494"],
    "playlists": ["613f6f160eb7e5502116a495", "613f6f160eb7e5502116a496"],
    "artistas": ["613f6f160eb7e5502116a497", "613f6f160eb7e5502116a498"],
    "carpetas": ["613f6f160eb7e5502116a499", "613f6f160eb7e5502116a49a"],
    "seguidos": ["613f6f160eb7e5502116a49b", "613f6f160eb7e5502116a49c"],
    "seguidores": ["613f6f160eb7e5502116a49d", "613f6f160eb7e5502116a49e"],
    "podcasts": ["613f6f160eb7e5502116a49f", "613f6f160eb7e5502116a4a0"],
    "indicador": "Playlist",
    "momento_audio": 0,
    "ultimo_audio": "64583522e62ce8000ed1a569",
    "ultimo_conjunto_audio": "6459332efc63f4000eb71bfc",
},

{    "username": "jAIME Sanchez",
    "_id": "Jaime123@example.com",
    "password": "mypassword123",
    "Urlfoto": "https://example.com/juan123/profile.jpg",
    "albumes": ["613f6f160eb7e5502116a491", "613f6f160eb7e5502116a492"],
    "cancionesfav": ["613f6f160eb7e5502116a493", "613f6f160eb7e5502116a494"],
    "playlists": ["613f6f160eb7e5502116a495", "613f6f160eb7e5502116a496"],
    "artistas": ["613f6f160eb7e5502116a497", "613f6f160eb7e5502116a498"],
    "carpetas": ["613f6f160eb7e5502116a499", "613f6f160eb7e5502116a49a"],
    "seguidos": ["613f6f160eb7e5502116a49b", "613f6f160eb7e5502116a49c"],
    "seguidores": ["613f6f160eb7e5502116a49d", "613f6f160eb7e5502116a49e"],
    "podcasts": ["613f6f160eb7e5502116a49f", "613f6f160eb7e5502116a4a0"],
    "indicador": "Playlist",
    "momento_audio": 0,
    "ultimo_audio": "64583522e62ce8000ed1a569",
    "ultimo_conjunto_audio": "6459332efc63f4000eb71bfc",
} ]`
```
*   **Respuesta de error:**
    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al obtener los usuarios"}`

***

### Obtener un usuario por su ID

Este endpoint permite obtener un usuario de la base de datos por su ID.

*   **URL:** `/users/:id`
    
*   **Método HTTP:** `GET`
    
*   **Parámetros de URL:**
    
    *   `_id` (obligatorio): El ID del usuario que se desea obtener (Mail).
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**

```
{  
    "username": "Juan Sanchez",
    "_id": "juan123@example.com",
    "password": "mypassword123",
    "Urlfoto": "https://example.com/juan123/profile.jpg",
    "albumes": ["613f6f160eb7e5502116a491", "613f6f160eb7e5502116a492"],
    "cancionesfav": ["613f6f160eb7e5502116a493", "613f6f160eb7e5502116a494"],
    "playlists": ["613f6f160eb7e5502116a495", "613f6f160eb7e5502116a496"],
    "artistas": ["613f6f160eb7e5502116a497", "613f6f160eb7e5502116a498"],
    "carpetas": ["613f6f160eb7e5502116a499", "613f6f160eb7e5502116a49a"],
    "seguidos": ["613f6f160eb7e5502116a49b", "613f6f160eb7e5502116a49c"],
    "seguidores": ["613f6f160eb7e5502116a49d", "613f6f160eb7e5502116a49e"],
    "podcasts": ["613f6f160eb7e5502116a49f", "613f6f160eb7e5502116a4a0"],
    "indicador": "Playlist",
    "momento_audio": 0,
    "ultimo_audio": "64583522e62ce8000ed1a569",
    "ultimo_conjunto_audio": "6459332efc63f4000eb71bfc",
}`
```
*   **Respuesta de error:**
    *   **Código:** 404 (Not Found)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "El usuario con el ID especificado no fue encontrado"}`
    *   **Código:** 500 (Internal Server Error)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Hubo un error al obtener el usuario especificado"}`


### Actualizar un usuario por su ID (correo electrónico)

Este endpoint permite actualizar un usuario por su ID (correo electrónico).

*   **URL:** `/users/:id`
*   **Método HTTP:** `PUT`
*   **Parámetros de URL:**
    *   `id`: ID del usuario a actualizar (correo electrónico)
*   **Headers:** Ninguno
*   **Body:**
    
    
```
{  
    "username": "Juan Sanchez",
    "password": "mypassword123",
    "Urlfoto": "https://example.com/juan123/profile.jpg",
    "albumes": ["613f6f160eb7e5502116a491", "613f6f160eb7e5502116a492"],
    "cancionesfav": ["613f6f160eb7e5502116a493", "613f6f160eb7e5502116a494"],
    "playlists": ["613f6f160eb7e5502116a495", "613f6f160eb7e5502116a496"],
    "artistas": ["613f6f160eb7e5502116a497", "613f6f160eb7e5502116a498"],
    "carpetas": ["613f6f160eb7e5502116a499", "613f6f160eb7e5502116a49a"],
    "seguidos": ["613f6f160eb7e5502116a49b", "613f6f160eb7e5502116a49c"],
    "seguidores": ["613f6f160eb7e5502116a49d", "613f6f160eb7e5502116a49e"],
    "podcasts": ["613f6f160eb7e5502116a49f", "613f6f160eb7e5502116a4a0"],
    "indicador": "Playlist",
    "momento_audio": 0,
    "ultimo_audio": "64583522e62ce8000ed1a569",
    "ultimo_conjunto_audio": "6459332efc63f4000eb71bfc",
}`
```

    
*   **Respuesta exitosa:**
    
    *   **Código:** 200 (OK)
    *   **Contenido del cuerpo de la respuesta:**
    
  ```
{  
    "username": "Juan Sanchez",
    "_id": "juan123@example.com",
    "password": "mypassword123",
    "Urlfoto": "https://example.com/juan123/profile.jpg",
    "albumes": ["613f6f160eb7e5502116a491", "613f6f160eb7e5502116a492"],
    "cancionesfav": ["613f6f160eb7e5502116a493", "613f6f160eb7e5502116a494"],
    "playlists": ["613f6f160eb7e5502116a495", "613f6f160eb7e5502116a496"],
    "artistas": ["613f6f160eb7e5502116a497", "613f6f160eb7e5502116a498"],
    "carpetas": ["613f6f160eb7e5502116a499", "613f6f160eb7e5502116a49a"],
    "seguidos": ["613f6f160eb7e5502116a49b", "613f6f160eb7e5502116a49c"],
    "seguidores": ["613f6f160eb7e5502116a49d", "613f6f160eb7e5502116a49e"],
    "podcasts": ["613f6f160eb7e5502116a49f", "613f6f160eb7e5502116a4a0"],
    "indicador": "Playlist",
    "momento_audio": 0,
    "ultimo_audio": "64583522e62ce8000ed1a569",
    "ultimo_conjunto_audio": "6459332efc63f4000eb71bfc",
}`
```

    
*   **Respuesta de error:**
    *   **Código:** 404 (Not Found)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Usuario no encontrado"}`
    *   **Código:** 500
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Error al actualizar"}`


***

### Eliminar un usuario por su ID

Este endpoint permite eliminar un usuario de la base de datos por su ID.

*   **URL:** `/users/:id`
    
*   **Método HTTP:** `DELETE`
    
*   **Parámetros de URL:**
    
    *   `id` (obligatorio): El ID del usuario que se desea eliminar.
*   **Headers:** Ninguno
    
*   **Body:** Ninguno
    
*   **Respuesta exitosa:**
    
    *   **Código:** 200
    *   **Contenido del cuerpo de la respuesta:** `{ "mensaje": 'Usuario borrado correctamente' }`
    
    *   **Código:** 404 (Not Found)
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "No se encontró el usuario especificado"}`

    *   **Código:** 500 
    *   **Contenido del cuerpo de la respuesta:** `{"mensaje": "Error al borrar el usuario"}`

***

