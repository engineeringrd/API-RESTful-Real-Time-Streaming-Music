const Folder = require('../models/FolderModel');
const Playlist = require('../models/PlaylistModel');
const FuncionesComunes = require('./FuncionesComunes');
const User = require('../models/UserModel');
const mongoose = require('mongoose')

// Controlador para obtener una lista de todas las carpetas
exports.getAllFolders = async (req, res, next) => {
  try {
    const folders = await Folder.find().populate('canciones', 'titulo UrlCancion');
    res.status(200).json(folders);
  } catch (error) {
    res.status(500).json({"mensaje": "La carpeta con ese ID no existe"});
    next(error);
  }
};

// Controlador para obtener una carpeta específica por su _id
exports.getFolderById = async (req, res, next) => {
  try {
    const folder = await Folder.findById(req.params._id).populate('Playlist');
    if (!folder) {
      return res.status(404).json({"mensaje": "La carpeta con ese ID no existe"});
    }
    res.status(200).json(folder);
  } catch (error) {
    res.status(500).json({"mensaje": "Hubo un error al obtener la carpeta"});
    next(error);
  }
};

// Controlador para crear una nueva carpeta
exports.createFolder = async (req, res, next) => {
  try {
    //Comprobar que existen las playlists
    if (!(await FuncionesComunes.comprobarId(req.body.playlists, Playlist))) {
      return res.status(500).json({"mensaje": "Hubo un error al crear la carpeta (playlist no existente)"});
    }
    console.log(req.body);
    //Crear la carpeta
    const folder = new Folder(req.body);
    await folder.save();
    res.status(201).json(folder);
  } catch (error) {
    res.status(500).json({"mensaje": "Hubo un error al crear la carpeta"});
    next(error);
  }
};

// Controlador para actualizar una carpeta específica por su _id
exports.updateFolder = async (req, res, next) => {
  try {
    //Comprobar que existen las playlists
    if (!(await FuncionesComunes.comprobarId(req.body.playlists, Playlist))) {
      return res.status(500).json({ msg: 'Playlist no existente' });
    }

    //Actualizar la carpeta
    const folder = await Folder.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true }
    );

    if (!folder) {
      return res.status(404).json({ message: 'Carpeta no encontrada' });
    }
    res.status(200).json(folder);
  } catch (error) {
    res.status(500).json({"mensaje": "Hubo un error al actualizar la carpeta"});
    next(error);
  }
};

// Controlador para eliminar una carpeta específica por su _id
exports.deleteFolder = async (req, res, next) => {
  try {
    const folder = await Folder.findById(req.params._id);
    if (!folder) {
      return res.status(404).json({     "mensaje": "No se encontró la carpeta solicitada" });
    }
    // Eliminar la playlist de los usuarios
    let usuarios = await User.find({ carpetas: mongoose.Types.ObjectId(req.params._id) });
    for(let i = 0; i < usuarios.length; i++){
      await User.updateOne({ _id: usuarios[i]._id}, { $pull: { carpetas: req.params._id }});
      //MANDAR NOTIFICACIÓN
    }
    await folder.remove();
    res.status(200).json({"mensaje": "Carpeta eliminada exitosamente" });
  } catch (error) {
    res.status(500).json({"mensaje": "Hubo un error al eliminar la carpeta" });
    next(error);
  }
};
