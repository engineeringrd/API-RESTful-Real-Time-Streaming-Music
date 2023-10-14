const db = require('../config/db');
const mongoose = require('mongoose')

const PodcastSchema = new db.Schema({
  titulo: { type: String, required: true },
  duracion: { type: Number, required: true },
  autor:{ type: String, required: true},
  descripcion:{ type: String, required: true},
  UrlPodcast:{ type: String, required: true},
  capitulos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' }],
});

module.exports = db.model('Podcast', PodcastSchema);
