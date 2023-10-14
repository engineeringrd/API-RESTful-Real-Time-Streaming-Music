const chapterController = require('../../controllers/ChapterController');
const app = require('../../config/app');

// ******************* CAPITULOS *****************

// Obtiene todos los capítulos
app.get('/chapters', chapterController.getAllChapters);

// Obtiene un capítulo por su ID
app.get('/chapters/:_id', chapterController.getChapterById);

// Crea un nuevo capítulo
app.post('/chapters', chapterController.createChapter);

// Actualiza un capítulo existente por su ID
app.put('/chapters/:_id', chapterController.updateChapter);

// Elimina un capítulo existente por su ID
app.delete('/chapters/:_id', chapterController.deleteChapter);

module.exports = app;