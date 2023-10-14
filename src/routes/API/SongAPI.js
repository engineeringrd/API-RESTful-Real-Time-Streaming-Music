const songController = require('../../controllers/SongController')
const app = require('../../config/app');
const shareController = require('../../controllers/ShareController')

// ******************* CANCIONES *****************

//Generar un audio
app.post('/audio/:_id', songController.addAudio);

//Obtener un audio
app.get('/audio/:_id', songController.getAudio);

// Buscar canción por tag
app.get('/songs/find/tag/:tag', songController.findSongByTag);

// Compartir
app.post('/songs/share', shareController.shareSong);

//Borrar una cancion compartida (dejar de compartirla)
app.delete('/songs/share/:id', shareController.deleteShared);

// Ver compartidas
app.get('/songs/share/:user', shareController.seeSharedSongs);

// Buscar canción por string
app.get('/songs/find/:name', songController.findSongByString);

// Obtener todas las canciones
app.get('/songs', songController.getAllSongs);

// Obtener una canción por su ID
app.get('/songs/:_id', songController.getSongById);

// Crear una nueva canción
app.post('/songs', songController.createSong);

// Actualizar una canción por su ID
app.put('/songs/:_id', songController.updateSong);

// Eliminar una canción por su ID
app.delete('/songs/:_id', songController.deleteSong);


module.exports = app;