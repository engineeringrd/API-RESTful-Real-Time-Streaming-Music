const artistController = require('../../controllers/ArtistController');
const app = require('../../config/app');

// Obtener todos los artistas
app.get('/artists/find/:name', artistController.findArtistByString);

// Obtener todos los artistas
app.get('/artists', artistController.getAllArtists);

// Obtener un artista por su ID
app.get('/artists/:_id', artistController.getArtistById);

// Crear un nuevo artista
app.post('/artists', artistController.createArtist);

// Actualizar un artista por su ID
app.put('/artists/:_id', artistController.updateArtist);

// Eliminar un artista por su ID
app.delete('/artists/:_id', artistController.deleteArtist);

// Obtener todas las canciones de un artista
app.get('/artists/:_id/songs', artistController.getSongsOfArtist);
