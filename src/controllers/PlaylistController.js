const Playlist = require('../models/PlaylistModel');
const Song = require('../models/SongModel');
const User = require('../models/UserModel');
const FuncionesComunes = require('./FuncionesComunes');
const mongoose = require('mongoose');
const NotificationsC = require('./NotificationController');

exports.findPlaylistsByString = async (req, res) => {
  const cadena = req.params.name;
  try {
    const playlist = await Playlist.find({ titulo: { $regex: '^' + cadena } });
    res.status(200).json({ playlist });
  } catch (error) {
    res.status(500).json({ mensaje: 'Hubo un error al buscar las playlists' });
    console.error(error);
  }
};

exports.findPlaylistsByTag = async (req, res) => {
  const cadena = req.params.tag;
  console.log(cadena);
  try {
    const playlist = await Playlist.find({ etiquetas: cadena });
    res.status(200).json({ playlist });
  } catch (error) {
    res.status(500).json({ mensaje: 'Hubo un error al buscar las playlists' });
    console.error(error);
  }
};

// Obtener todas las playlists
exports.getAllPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find().populate('autor', 'username');
    res.json(playlists);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
};

// Obtener una playlist por su _id
exports.getPlaylistById = async (req, res) => {
  const { _id } = req.params;

  try {
    const playlist = await Playlist.findById(_id).populate('autor', 'username');
    if (!playlist) {
      return res.status(404).json({ msg: 'Playlist no encontrada' });
    }
    res.json(playlist);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Hubo un error' });
  }
};

// Crear una nueva playlist
exports.createPlaylist = async (req, res) => {
  try {
    const { titulo, foto, autor, canciones, etiquetas } = req.body; // Obtener los datos del cuerpo de la petición POST

    //Comprobar que existen las canciones
    if (!(await FuncionesComunes.comprobarId(req.body.canciones, Song))) {
      return res.status(500).json({ msg: 'Canción no existente' });
    }
    //Comprobar que existe el autor
    // if (!(await FuncionesComunes.comprobarId(req.body.autor, User))) {
    //   return res.status(500).json({ msg: 'Autor no existente' });
    // }

    //------------Guardar la playlist
    const playlist = new Playlist({ titulo, foto, autor, canciones, etiquetas }); // Crear una nueva instancia del modelo Playlist con los datos recibidos
    const result = await playlist.save(); // Guardar el documento en la base de datos y esperar a que se complete la operación
    res.status(201).json(result); // Devolver una respuesta con el documento creado y el código de estado HTTP 201 (Created)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la lista de reproducción' }); // Devolver una respuesta de error con el código de estado HTTP 500 (Internal Server Error)
  }
};

// Actualizar una playlist por su _id
exports.updatePlaylist = async (req, res) => {

  //Comprobar que existen las canciones
  if (!(await FuncionesComunes.comprobarId(req.body.canciones, Song))) {
    return res.status(500).json({ msg: 'Canción no existente' });
  }
  //Comprobar que existe el autor
  // if (!(await FuncionesComunes.comprobarId(req.body.autor, User))) {
  //   return res.status(500).json({ msg: 'Autor no existente' });
  // }

  //Actualizar la playlist
  try {
    const playlist = await Playlist.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true }
    );
 
    if (!playlist) {
      return res.status(404).json({ message: 'Capitulo no encontrado' });
    }
    res.status(200).json(playlist);
  } catch (error) {
    next(error);
  }
};

// Eliminar una playlist por su _id
exports.deletePlaylist = async (req, res) => {
  let resultado = await this.deletePlaylistLocal(req);
  switch (resultado) {
    case 200:
      res.status(200).json({ "mensaje": "Playlist eliminada correctamente" });
      break;
    case 404:
      res.status(404).json({ "mensaje": "Playlist no encontrada" });
      break;
    default:
      res.status(500).json({ "mensaje": "Hubo un error al borrar la playlist" });
      break;
  }
};

exports.deletePlaylistLocal = async (req) => {
  const { _id } = req.params;
  try {
    let playlist = await Playlist.findById(_id);
    if (!playlist) {
      return 404;
    }
    // Eliminar la playlist de los usuarios
    let usuarios = await User.find({ playlists: mongoose.Types.ObjectId(_id) });
    
    for(let i = 0; i < usuarios.length; i++){
      await User.updateOne({ _id: usuarios[i]._id}, { $pull: { playlists: _id }});
      await NotificationsC.createNotificationLocal({"body": {"user": usuarios[i]._id, "followed": "decibely@decibely.es", "message": "Tu playlist \"" + playlist.titulo + "\" ha sido eliminada"}});
    }
    await playlist.remove();
    return 200;
  } catch (error) {
    console.log(error);
    return 500;
  }
};

