const db = require('../config/db');
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const saltRounds = 10;
require('./SongModel');

const UserSchema = new db.Schema({
    _id: { type: String}, // el mail sera el id
    username: { type: String, required: true },
    password: {type: String, required: true },
    Urlfoto: { type: String },
    albumes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Albums' }],
    cancionesfav: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
    playlists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Playlist' }],
    artistas:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Artist'}],
    carpetas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Folders' }],
    seguidos: [{ type: mongoose.Schema.Types.String, ref: 'User' }],
    seguidores: [{ type: mongoose.Schema.Types.String, ref: 'User' }],
    podcasts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Podcast' }],
    // escuchando: { type: mongoose.Schema.Types.ObjectId, ref: 'Song' },
    // momento: { type: String },
    // listaEscuchando: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }]
    ultimo_audio: {type: String}, //Cancion o capitulo que esta escuchando el usuario
    ultimo_conjunto_audio: {type: String},//Playlist o album que esta escuchando el usuario
    momento_audio: {type: Number},
    indicador: {type: String}//Si esta escuchando una playlist
}, {_id: false});

// **************** AUTH *********************
UserSchema.pre('save', function(next){
    if(this.isNew || this.isModified('password')){
        //Document es el usuario entero
        bcrypt.hash(this.password, saltRounds, (err, hashedPassword) => {
            if (err) {
                next(err);
            }
            else{
                this.password = hashedPassword;
                next();
            }
        });
    }
    else{
        next();
    }
});


UserSchema.methods.encriptPassword = async function(password) {
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw error;
    }
};


UserSchema.methods.isCorrectPassword = function(password, callback) {
    bcrypt.compare (password, this.password, function(err, same){ 
        if(err) {
            callback(err);
        }else{
            callback(err, same);
        }
    });
}




module.exports = db.model('User', UserSchema);
