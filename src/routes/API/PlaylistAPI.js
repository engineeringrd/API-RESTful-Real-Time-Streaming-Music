const playlistController = require('../../controllers/PlaylistController');
const app = require('../../config/app');
const shareController = require('../../controllers/ShareController')



// ******************* PLAYLISTS *****************
app.post('/playlists/share', shareController.sharePlaylists);

app.get('/playlists/share/:user', shareController.seeSharedPlaylists);

// Obtener todas las playlists
app.get('/playlists/find/tag/:tag', playlistController.findPlaylistsByTag);

// Obtener todas las playlists
app.get('/playlists/find/:name', playlistController.findPlaylistsByString);

// Obtener todas las playlists
app.get('/playlists', playlistController.getAllPlaylists);

// Obtener una playlist por su ID
app.get('/playlists/:_id', playlistController.getPlaylistById);

// Crear una nueva playlist
app.post('/playlists', playlistController.createPlaylist);

// Actualizar una playlist por su ID
app.put('/playlists/:_id', playlistController.updatePlaylist);

// Eliminar una playlist por su ID
app.delete('/playlists/:_id', playlistController.deletePlaylist);

module.exports = app;