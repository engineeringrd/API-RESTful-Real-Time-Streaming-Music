const folderController = require('../../controllers/FolderController');
const app = require('../../config/app');

// ******************* CARPETAS *****************

// Obtiene todas las carpetas
app.get('/folders', folderController.getAllFolders);

// Obtiene una carpeta por su ID
app.get('/folders/:_id', folderController.getFolderById);

// Crea una nueva carpeta
app.post('/folders', folderController.createFolder);

// Actualiza una carpeta existente por su ID
app.put('/folders/:_id', folderController.updateFolder);

// Elimina una carpeta existente por su ID
app.delete('/folders/:_id', folderController.deleteFolder);

module.exports = app;