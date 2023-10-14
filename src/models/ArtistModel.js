const db = require('../config/db');

const ArtistSchema = new db.Schema({
    nombre: { type: String, required: true},
    Urlfoto: { type: String },
});

module.exports = db.model('Artist', ArtistSchema);
