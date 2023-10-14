const Song = require('../models/SongModel');
const Artist = require('../models/ArtistModel');
const Audio = require('../models/AudioModel');
const mongoose = require('mongoose');
const FuncionesComunes = require('./FuncionesComunes');
const fs = require('fs');

exports.findSongByString = async (req, res) => {
  const cadena = req.params.name;
  try {
    const songs = await Song.find({ titulo: { $regex: '^' + cadena } });
    res.status(200).json({ songs });
  } catch (error) {
    res.status(500).json({ mensaje: 'Hubo un error al buscar las canciones' });
    console.error(error);
  }
};

exports.findSongByTag = async (req, res) => {
  const cadena = req.params.tag;
  console.log(cadena);
  try {
    const song = await Song.find({ etiquetas: cadena });
    res.status(200).json({ song });
  } catch (error) {
    res.status(500).json({ mensaje: 'Hubo un error al buscar las canciones' });
    console.error(error);
  }
};

exports.addAudio = async (req, res) => {
  try{
    const { _id } = req.params;
    const file = fs.readFileSync("./src/canciones/SnapSave.io - Meditación Guiada 3 Minutos para Calmar la Mente (64 kbps).mp3");
    let audio = new Audio({
      nombre: _id,
      mp3: {data: file, contentType: 'audio/mp3'}
    })

    await audio.save();
  
    const audio2 = await Audio.findById(audio._id);

    res.set('Content-Type', audio2.mp3.contentType);
    res.send(audio2.mp3.data);
  }
  catch(err){
    console.log(err);
  }
}

exports.getAudio = async (req, res) => {
  try{
    const { _id } = req.params;
    const audio = await Audio.findById(_id);
    res.set('Content-Type', audio.mp3.contentType);
    res.send(audio.mp3.data);
  }
  catch(err){
    console.log(err);
  }
}

// Obtener todas las canciones
exports.getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.status(200).json(songs);
  } catch (error) {
    console.log(error);
    res.status(500).post({"mensaje": "Hubo un error al obtener las canciones"});
  }
};

// Obtener una canción por su _id
exports.getSongById = async (req, res) => {
  const { _id } = req.params;

  try {
    const song = await Song.findById(_id);
    if (!song) {
      return res.status(404).json({ "mensaje": 'Canción no encontrada' });
    }
    res.status(200).json(song);
  } catch (error) {
    console.log(error);
    res.status(500).json({"mensaje": "Hubo un error al obtener la canción"});
  }
};

// Crear una nueva canción
exports.createSong = async (req, res) => {
  const { titulo, autor, Urlfoto, duracion, etiquetas, UrlCancion } = req.body;

  try {
    //Comprobar que existe el autor
    if (!(await FuncionesComunes.comprobarId(req.body.autor, Artist))) {
      return res.status(400).json({ msg: 'Autor no existente' });
    }

    //Crear la cancion
    let song = new Song({
      titulo,
      autor,
      Urlfoto,
      duracion,
      etiquetas,
      UrlCancion
    }).populate('autor');

    await song.save();
    res.status(200).json(song);
  } catch (error) {
    console.log(error);
    res.status(500).json({"msg": 'Se produjo un error al intentar crear la canción.'});
  }
};

// Actualizar una canción por su _id
exports.updateSong = async (req, res) => {
  try {
    //Comprobar que existe el autor
    if (!(await FuncionesComunes.comprobarId(req.body.autor, Artist))) {
      return res.status(404).json({ msg: 'Autor no existente' });
    }

    //Actualizar la cancion
    const song = await Song.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true }
    );

    if (!song) {
      return res.status(404).json({ msg: 'Canción no encontrada' });
    }
    res.status(200).json({"msg": "Canción actualizada correctamente" });
  } catch (error) {
    res.status(500).json({"msg": "Error al actualizar la canción" });
    next(error);
  }
};

exports.deleteSongLocal = async (req) => {
  const { _id } = req.params;
  try{
    let song = await Song.findById(_id);
    if (!song) {
      return 404;
    }
    // Eliminar el álbum
    await song.remove();
    return 200;
      
  } catch (error) {
      return 500;
  }
}

// Eliminar un álbum por su _id
exports.deleteSong = async (req, res) => {
  
  let resultado = await this.deleteSongLocal(req);
  switch (resultado){
    case 200:
      res.status(200).json({"mensaje": "Canción eliminada correctamente"});
      break;
    case 404:
      res.status(404).json({ msg: 'Canción no encontrada' });
      break;
    default:
      res.status(500).json({"mensaje": "Hubo un error al eliminar la canción"});
      break;
    } 
};
