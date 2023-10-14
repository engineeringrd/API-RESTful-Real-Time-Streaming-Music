const podcastController = require('../../controllers/PodcastController');
const app = require('../../config/app');

// ******************* PODCASTS *****************

// Obtiene todos los podcasts
app.get('/podcasts', podcastController.getPodcasts);

// Obtiene un podcast por su ID
app.get('/podcasts/:_id', podcastController.getPodcastById);

// Obtiene un podcast por su nombre (devuelve un array por si hay varios con el mismo nombre)
app.get('/podcasts/byName/:nombre', podcastController.getPodcastsByString);

// Obtiene todos los podcasts de un autor
app.get('/podcasts/byAuthor/:autor', podcastController.getPodcastsByAuthor);

// Crea un nuevo podcast
app.post('/podcasts', podcastController.createPodcast);

// Actualiza un podcast existente por su ID
app.put('/podcasts/:_id', podcastController.updatePodcast);

// Elimina un podcast existente por su ID
app.delete('/podcasts/:_id', podcastController.deletePodcast);

module.exports = app;