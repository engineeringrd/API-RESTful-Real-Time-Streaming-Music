const userController = require('../../controllers/UserController');
const app = require('../../config/app');

//*******REGISTRO Y LOGGEO ******/

// Registrar un usuario
app.post('/register', userController.registerUser);

// Login de un usuario
app.post('/login', userController.loginUser);


// ******************* USUARIOS *****************

// Obtener todos los usuarios
app.get('/users', userController.getAllUsers);

// Obtener un usuario por su ID
app.get('/users/:_id', userController.getUserById);

// Obtener un usuario por su ID
app.get('/users/find/:username', userController.findUserByString);

// Crear un nuevo usuario
//app.post('/users', userController.createUser);

// Actualizar un usuario por su ID (correo electrónico)
app.put('/users/:id', userController.updateUser);

// Eliminar un usuario por su ID
app.delete('/users/:id', userController.deleteUser);

// // Actualizar el nombre de usuario
// app.put('/users/:id/username', userController.updateUsername);

// // Actualizar la contraseña del usuario
// app.put('/users/:id/password', userController.updatePassword);

// // Añadir una foto al perfil del usuario
// app.post('/users/:id/photo', userController.addUserPhoto);

// // Agregar una canción a la lista de canciones del usuario
// app.post('/users/:id/songs', userController.addSongToList);

// // Eliminar una canción de la lista de canciones del usuario
// app.delete('/users/:id/songs', userController.removeSongFromList);

// // Agregar una canción a la lista de canciones favoritas del usuario
// app.post('/users/:id/favorites', userController.addSongToFavorites);

// // Eliminar una canción de la lista de canciones favoritas del usuario
// app.delete('/users/:id/favorites', userController.removeSongFromFavorites);

// // Agregar una playlist a la lista de playlists del usuario
// app.post('/users/:id/playlists', userController.addPlaylistToUser);

// // Eliminar una playlist de la lista de playlists del usuario
// app.delete('/users/:id/playlists/:playlistId', userController.removePlaylistFromUser);

// // Añadir una carpeta a la lista de carpetas del usuario
// app.post('/users/:userId/folders/:folderId', userController.addFolderToUser);

// // Eliminar una carpeta de la lista de carpetas del usuario
// app.delete('/users/:userId/folders/:folderId', userController.removeFolderFromUser);

// // Agregar un álbum a la lista de álbumes del usuario
// app.post('/users/:id/albums', userController.addAlbumToUser);

// // Eliminar un álbum de la lista de álbumes del usuario
// app.delete('/users/:id/albums', userController.removeAlbumFromUser);

// // Agregar un podcast a la lista de podcasts seguidos por el usuario
// app.post('/users/:id/podcasts', userController.addPodcastToFollow);

// // Eliminar un podcast de la lista de podcasts seguidos por el usuario
// app.delete('/users/:userId/podcasts/:podcastId', userController.removePodcastFromFollow);

// // Agregar un usuario a la lista de usuarios seguidos por el usuario
// app.post('/users/:id/following', userController.addUserToFollowing);

// // Eliminar un usuario de la lista de usuarios seguidos por el usuario
// app.delete('/users/:id/following', userController.removeUserFromFollowing);

// // Agregar un usuario a la lista de usuarios que siguen al usuario
// app.post('/users/:id/followers', userController.addUserToFollowers);

// // Eliminar un usuario de la lista
// app.delete('/users/:id/following', userController.removeUserFromFollowers);

// // Obtener el campo escuchando y momento del usuario por su id
// app.get('/users/:id/listening', userController.getListening);

// // Actualizar el campo escuchando y momento del usuario
// app.put('/users/:id/listening', userController.updateListening);


// // Obtener las playlists de un usuario por su ID
// app.get('/users/:id/playlists', userController.getUserPlaylists);

// // Obtener los albumes de un usuario por su ID
// app.get('/users/:id/albums', userController.getUserAlbums);

// // Obtener las canciones favoritas de un usuario por su ID
// app.get('/users/:id/favoritesongs', userController.getUserFavoriteSongs);

// // Obtener los artistas seguidos de un usuario por su ID
// app.get('/users/:id/followedartists', userController.getUserFollowedArtists);

// // Obtener los podcasts suscritos de un usuario por su ID
// app.get('/users/:id/subscribedpodcasts', userController.getUserSubscribedPodcasts);

// // Obtener las carpetas de un usuario por su ID
// app.get('/users/:id/folders', userController.getUserFolders);

// // Obtener las canciones de un usuario
// app.get('/users/:id/songs', userController.getUserSongs);


// module.exports = app;