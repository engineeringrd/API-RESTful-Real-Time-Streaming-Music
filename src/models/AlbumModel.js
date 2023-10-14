const db = require('../config/db');
const mongoose = require('mongoose')

const AlbumSchema = new db.Schema({
  //_id: { type: String, required: true },
  titulo: { type: String, required: true },
  foto: { type: String },
  artista:{ type: mongoose.Schema.Types.ObjectId, ref: 'Artist'},
  canciones: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
});

module.exports = db.model('Albums', AlbumSchema);
