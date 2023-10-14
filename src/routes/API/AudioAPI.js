const audioController = require('../../controllers/AudioController')
const app = require('../../config/app');

// ******************* CANCIONES *****************

// Buscar canción por string
app.get('/audio/:nombre', audioController.addAudio);

module.exports = app;