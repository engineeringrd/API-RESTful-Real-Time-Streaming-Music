const app               = require('../config/app');
const User              = require('../models/UserModel');
const SongC             = require('../controllers/SongController');
const ArtistC           = require('../controllers/ArtistController');
const ChapterC          = require('../controllers/ChapterController');
const PodcastC          = require('../controllers/PodcastController');
const NotificationC     = require('../controllers/NotificationController');
const PlaylistC         = require('../controllers/PlaylistController');
const AudioC         = require('../controllers/AudioController');

const ArtistAPI         = require('./API/ArtistAPI');
const SongAPI           = require('./API/SongAPI');
const AlbumAPI          = require('./API/AlbumAPI');
const ChapterAPI        = require('./API/ChapterAPI');
const FolderAPI         = require('./API/FolderAPI');
const NotificationAPI   = require('./API/NotificationAPI');
const PlaylistAPI       = require('./API/PlaylistAPI');
const PodcastAPI        = require('./API/PodcastAPI');
const UserAPI           = require('./API/UserAPI');

const mongoose          = require('mongoose');

//Ventana de inicio con iniciar sesión o registro

//---------------------------------------Pruebas para meter datos a la base

//Crear una cancion (funciona)
app.post('/createSong', (req, res) => {
    SongC.createSong(req.body, res);
});

//Borrar una cancion (funciona)
app.post('/deleteSong', (req, res) => {
    SongC.deleteSong(req.body, res);
});

//Crear un artista (funciona bien)
app.post('/createArtist', (req, res) => {
    console.log(req.body);
    ArtistC.createArtist(req.body, res);
});

//Borrar un artista (funciona bien)
app.post('/deleteArtist', (req, res) => {
    console.log(req.body);
    ArtistC.deleteArtist(req.body, res);
});

//OKEY todos casos. Tanto si existe como si no
app.post('/updateArtist', (req, res) => {
    console.log(req.body);
    ArtistC.updateArtist(req.body, res);
});

//OKAY todos los casos.
app.post('/getArtist', (req, res) => {
    console.log(req.body);
    ArtistC.getArtistById(req.body, res);
});

//OKAY todos los casos
app.post('/getAllArtist', (req, res) => {
    ArtistC.getAllArtists(res);
});

//Crear un capitulo de podcast (funciona bien)
app.post('/createChapter', (req, res) => {
    console.log(req.body);
    ChapterC.createChapter(req.body, res);
});

//Crear un podcast (no detecta el id de los capitulos y pasa algo con la foto)
//Los capitulos no estan incluidos en PodcastController.createPodcast
app.post('/createPodcast', (req, res) => {
    console.log(req.body);
    PodcastC.createPodcast(req.body, res);
});

//Funciona bien todos casos
app.post('/createNotification', (req, res) => {
    console.log(req.body);
    NotificationC.createNotification(req.body, res);
});

//Funciona bien todos casos
app.post('/deleteNotificationsAll', (req, res) => {
    console.log(req.body);
    NotificationC.deleteAllNotificationsByUser(req.body, res);
});

//Funciona bien todos casos
app.post('/getNotificationsByUser', (req, res) => {
    console.log(req.body);
    NotificationC.getNotificationsByUser(req.body, res);
});

//Okey todos casos
app.post('/deleteNotificationById', (req, res) => {
    console.log(req.body);
    NotificationC.deleteNotificationById(req.body, res);
})

app.post('/createPlaylist', (req, res) => {
    console.log(req.body);
    PlaylistC.createPlaylist(req.body, res);
});



//--------------------------------------------------------------------------


//Página de login
app.post('/authenticate', (req, res) => {
    const {username, password} = req.body;
    
    User.findOne({username}, (err, user) =>{
        console.log("USUARIO" + user);
        console.log("VALOR METIDOCRACIA" + username);
        if(err) {
            res.status(500).send('ERROR AL AUTENTICAR AL USUARIO');
        }
        else if(!user){
            res.status(500).send('EL USUARIO NO EXISTE');
        }
        else{
            user.isCorrectPassword (password, (err, result) =>{
                if(err) {
                    res.status(500).send('ERROR AL AUTENTICAR');
                }else if(result) {
                    res.status(200).send('USUARIO AUTENTICADO CORRECTAMENTE');
                }else{
                    res.status(500).send('USUARIO Y/O CONTRASEÑA INCORRECTA');
                }
            });
        }
    })
});

//Página de registro
app.post('/register', (req, res) => {
    console.log(req.body.mail);
    const {username, mail, password} = req.body;
    const user = new User({
        username: username,
        _id: mail,
        password: password,
        Urlfoto: 'url',
        canciones: [mongoose.Types.ObjectId()],
        albumes: [mongoose.Types.ObjectId()],
        cancionesfav: [mongoose.Types.ObjectId()],
        playlists: [mongoose.Types.ObjectId()],
        artistas: [mongoose.Types.ObjectId()],
        carpetas: [mongoose.Types.ObjectId()],
        seguidos: [mongoose.Types.ObjectId()],
        seguidores: [mongoose.Types.ObjectId()],
        podcasts: [mongoose.Types.ObjectId()],
        escuchando: mongoose.Types.ObjectId(),
        momento: 'vacio'
    });

    console.log(user);
    user.save(err => {
        if (err) {
            res.status(500).send('ERROR AL REGISTRAR AL USUARIO');
        }
        else{
            res.status(200).send('USUARIO REGISTRADO');
        }
    });
});

//Ventana de inicio cargando (gif loading)
app.post('/loading', (req, res) => {

});

//Ventana de inicio con iniciar sesión o registro
app.post('/init_page', (req, res) => {

});

//Página recuperar contraseña (introducir el correo para enviar msg)
app.post('/recover_paswd', (req, res) => {

});

//Página recuperar contraseña (introducir nueva contraseña)
app.post('/new_passwd', (req, res) => {

});

//HOLA RAUL. Menú de inicio
app.post('/start_page', (req, res) => {

});

//Página de notificaciones
app.post('/notifications', (req, res) => {

});

//Página de configuración
app.post('/configuration', (req, res) => {

});

//Página con los mejores resultados
app.post('/top_results', (req, res) => {

});

//Búsqueda de otros usuarios
app.post('/find_users', (req, res) => {

});

//Página con biblioteca del usuario
app.post('/library', (req, res) => {

});

//Pagina para anyadir playlists a una carpeta
app.post('/add_to_folder', (req, res) => {

});

//Pagina para anyadir canciones a una playlist
app.post('/add_to_playlist', (req, res) => {

});

//Pagina que muestra las canciones de una playlist
app.post('/playlist_view', (req, res) => {

});

//Pagina que muestra los artistas seguidos por un usuario dado
app.post('/my_artists', (req, res) => {

});

//Pagina que muestra los artistas seguidos por el propio usuario
app.post('/my_playlists', (req, res) => {

});


//Pagina para crear una carpeta
app.post('/create_folder', (req, res) => {

});

//Pagina para crear una playlist
app.post('/create_playlist', (req, res) => {

});

//Pagina para modificar el perfil del usuario
app.post('/modify_profile', (req, res) => {

});

//Pagina que muestra las canciones favoritas del propio usuario
app.post('/my_songs', (req, res) => {

});

//Pagina que muestra las canciones favoritas de un usuario dado
app.post('/users_songs', (req, res) => {

});

//Pagina que muestra las playlists de un usuario dado
app.post('/users_playlists', (req, res) => {

});

//Pagina que muestra el perfil del propio usuario
app.post('/my_profile', (req, res) => {

});

//Pagina que muestra los podcasts de un usuario dado
app.post('/users_podcasts', (req, res) => {

});

//Pagina que muestra los podcasts del propio usuario
app.post('/my_podcasts', (req, res) => {

});

//Pagina que muestra los capitulos de un podcast dado
app.post('/podcast', (req, res) => {

});
