const db = require('../config/db');
const mongoose = require('mongoose')

const FolderSchema = new db.Schema({
  nombre: { type: String, required: true },
  playlists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Playlist' }],
});

module.exports = db.model('Folders', FolderSchema);
