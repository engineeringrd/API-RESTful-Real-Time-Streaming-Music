const db = require('../config/db');
const mongoose = require('mongoose')

const SongSchema = new db.Schema({
    //_id: { type: String, required: true },
    titulo: { type: String, required: true },
    autor:{ type: mongoose.Schema.Types.ObjectId, ref: 'Artist'},
    Urlfoto: { type: String },
    duracion: { type: Number, required: true },
    etiquetas: [{ type: String }],
    UrlCancion: { type: String, required: true }
  });
  

module.exports = db.model('Song', SongSchema);
