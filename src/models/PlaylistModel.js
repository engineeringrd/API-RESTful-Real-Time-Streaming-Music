const db = require('../config/db');
const mongoose = require('mongoose')

const PlaylistSchema = new db.Schema({
  //_id: { type: String, required: true },
  titulo: { type: String, required: true },
  foto: { type: String },
  autor: {  type: mongoose.Schema.Types.String, ref: 'User' },
  canciones: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song'}],
  etiquetas: [{ type: String}],
});

module.exports = db.model('Playlist', PlaylistSchema);
