const db = require('../config/db');

const ChapterSchema = new db.Schema({
    //_id: { type: String, required: true },
    titulo: { type: String, required: true },
    autor:{ type: String, required: true},
    descripcion: { type: String, required: true },
    duracion: { type: Number, required: true },
    numCapitulo: {type: Number, required: true},
    UrlPodcast: { type: String, required: true }
  });
  

module.exports = db.model('Chapter', ChapterSchema);
