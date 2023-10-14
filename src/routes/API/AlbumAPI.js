const albumController = require('../../controllers/AlbumController')
const app = require('../../config/app');

// ******************* ÁLBUMES *****************

// Obtener todos los álbumes
app.get('/albums', albumController.getAllAlbums);

// Obtener un álbum por su ID
app.get('/albums/:_id', albumController.getAlbumById);

// Crear un nuevo álbum
app.post('/albums', albumController.createAlbum);

// Actualizar un álbum por su ID
app.put('/albums/:_id', albumController.updateAlbum);

// Eliminar un álbum por su ID
app.delete('/albums/:_id', albumController.deleteAlbum);

module.exports = app;


