const db = require('../config/db');

const AudioSchema = new db.Schema({
    nombre: { type: String, required: true},
    mp3: {data: Buffer, contentType: String}
});


module.exports = db.model('Audio', AudioSchema);
