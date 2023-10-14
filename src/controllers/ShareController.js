const User = require('../models/UserModel');
const Share = require('../models/ShareModel');
const Notification = require('../models/NotificationModel');
const NotificationC = require('../controllers/NotificationController');
const Song = require('../models/SongModel');
const Playlist = require('../models/PlaylistModel');
const FuncionesComunes = require('./FuncionesComunes');


const cancion_ident = "s";
const Playlist_ident = "p";
const mensaje_compartir_cancion = " te ha compartido una cancion ";
const mensaje_compartir_playlist = " te ha compartido una playlist ";



exports.seeSharedSongs = async (req, res) => {
  const { user } = req.params;

  try {
    if (!await FuncionesComunes.comprobarId(user, User)) {
      return res.status(500).json({ msg: 'Usuario no existente' });
    }

    let sharing = await Share.find({"receive": user,"atributo": cancion_ident });

    if(sharing != null){
      res.status(200).json(sharing);
    }
    else{
      res.status(404).json({ msg: 'No se encontraron canciones' });
    }


  } catch (error) {
    console.log(error);
    res.status(500).json({"mensaje": "Hubo un error al compartir la cancion"});
  }

};

exports.shareSong = async (req, res) => {
  const { share, receive, identificador} = req.body;

  try {
    let usuario = User.findOne({_id: share}, {username: 1});
    console.log(usuario);
    if (!usuario) {
      return res.status(500).json({ msg: 'Usuario no existente' });
    }

    let cancion = Song.findOne({_id: identificador})
    if (!cancion) {
      return res.status(500).json({ msg: 'Cancion no existente' });
    }

    let sharing = await Share.findOne({ "share": share, "receive": receive, "identificador": identificador, "atributo": cancion_ident });
    if(sharing){
      return res.status(501).json({ msg: 'Cancion ya compartida' });
    }

    let compartir = new Share({
      "share": share,
      "receive": receive,
      "identificador": identificador,
      "atributo": cancion_ident
    });

    await compartir.save();

    let comparticion = share + mensaje_compartir_cancion;
    console.log(comparticion);

    await NotificationC.createNotificationLocal({body:{"user": receive, "message": comparticion}});

    res.status(200).json({ msg: 'Cancion compartida' });


  } catch (error) {
    console.log(error);
    res.status(500).json({"msg": "Hubo un error al compartir la canción"});
  }
};

exports.seeSharedPlaylists = async (req, res) => {
  const { user } = req.params;

  try {
    if (!await FuncionesComunes.comprobarId(user, User)) {
      return res.status(500).json({ msg: 'Usuario no existente' });
    }

    let sharing = await Share.find({"receive": user,"atributo": Playlist_ident });

    if(sharing != null){
      res.status(200).json(sharing);
    }
    else{
      res.status(404).json({ msg: 'No se encontraron playlists' });
    }


  } catch (error) {
    console.log(error);
    res.status(500).json({"mensaje": "Hubo un error al compartir el Playlist"});
  }
};

exports.sharePlaylists = async (req, res) => {
  const { share, receive, identificador} = req.body;

  try {
    if (!(await FuncionesComunes.comprobarId(share, User) && (await FuncionesComunes.comprobarId(receive, User)))) {
      return res.status(500).json({ msg: 'Usuario no existente' });
    }

    if (!(await FuncionesComunes.comprobarId(identificador, Playlist))) {
      return res.status(500).json({ msg: 'Playlist no existente' });
    }

    let sharing = await Share.findOne({ "share": share, "receive": receive, "identificador": identificador, "atributo": Playlist_ident });
    if(sharing){
      return res.status(501).json({ msg: 'Playlist ya compartido' });
    }

    let compartir = new Share({
      "share": share,
      "receive": receive,
      "identificador": identificador,
      "atributo": Playlist_ident
    });

    await compartir.save();

    let comparticion = share + mensaje_compartir_playlist;

    await NotificationC.createNotificationLocal({body:{"user": receive, "message": comparticion}});

    res.status(200).json({ msg: 'Playlist compartido' });


  } catch (error) {
    console.log(error);
    res.status(500).json({"mensaje": "Hubo un error al compartir el Playlist"});
  }
};


exports.deleteShared = async (req, res) => {
  const id = req.params.id;
  
  try {
    cancion = await Share.findById(id);//Buscar el archivo en la bd
    if (!cancion) {
      res.status(404).json({ msg: 'No se encontró el archivo compartido' });
    }
    
    await cancion.remove();//Borrarlo
    res.status(200).json({ msg: 'Archivo compartido eliminado' });

  } catch (error) {
    console.log(error);
    res.status(500).json({"mensaje": "Hubo un error al borrar el archivo compartido"});
  }
};
