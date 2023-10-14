const db = require('../config/db');
const mongoose = require('mongoose')

const ShareSchema = new db.Schema({
    share: { type: mongoose.Schema.Types.String, ref: 'User', required: true },
    receive: { type: mongoose.Schema.Types.String, ref: 'User', required: true },
    identificador: { type: mongoose.Schema.Types.ObjectId },
    atributo: { type: mongoose.Schema.Types.String },
});

module.exports = db.model('Share', ShareSchema);
