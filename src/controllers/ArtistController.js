const Artist = require('../models/ArtistModel');
const Song = require('../models/SongModel');
const Album = require('../models/AlbumModel');
const Playlist = require('../models/PlaylistModel');
const Podcast = require('../models/PodcastModel');
const SongC = require('../controllers/SongController');
const AlbumC = require('../controllers/AlbumController');
const PlaylistC = require('../controllers/PlaylistController');
const PodcastC = require('../controllers/PodcastController');
const mongoose = require('mongoose')


exports.findArtistByString = async (req, res) => {
  const cadena = req.params.name;
  try {
    const artists = await Artist.find({ nombre: { $regex: '^' + cadena } });
    res.status(200).json({ artists });
  } catch (error) {
    res.status(500).json({ mensaje: 'Hubo un error al buscar los artistas' });
    console.error(error);
  }
};

// Obtener todos los artistas
exports.getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find();
    res.status(200).json(artists);
  } catch (error) {
    res.status(500).json({"mensaje": "Hubo un error al obtener los artistas"});
    console.log(error);
  }
};

// Obtener un artista por su _id
exports.getArtistById = async (req, res) => {
  const _id = req.params._id;

  try {
    const artist = await Artist.findById(_id);
    console.log(_id);
    console.log(req.params);
    if (!artist) {
      return res.status(404).json({ msg: 'Artista no encontrado' });
    }
    res.status(200).json(artist);
  } catch (error) {
    res.status(500).json({"mensaje": "Hubo un error al obtener el artista"});;
    console.log(error);
  }
};

// Crear un nuevo artista//OKEY
exports.createArtist = async (req, res) => {
  const { nombre, Urlfoto } = req.body;
  
  try {
    let artist = new Artist({
      nombre,
      Urlfoto
    });

    await artist.save();
    res.status(200).json(artist);
  } catch (error) {
    res.status(500).json({"mensaje": "Hubo un error al crear el artista"});
    console.log(error);
  }
};

// Actualizar un artista por su _id
exports.updateArtist = async (req, res) => {
  try {
    const artist = await Artist.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true }
    );

    if (!artist) {
      return res.status(404).json({ message: 'Artista no encontrado' });
    }
    res.status(200).json(artist);
  } catch (error) {
    res.status(500).json({"mensaje": "Hubo un error al actualizar el artista"});
    next(error);
  }
};

// Eliminar un artista por su _id
exports.deleteArtist = async (req, res) => {
  const _id = req.params._id;

  try {
    let artist = await Artist.findById(_id);
    if (!artist) {
      return res.status(404).json({ msg: 'Artista no encontrado' });
    }
    let albums = await Album.find({ artista: mongoose.Types.ObjectId(_id) });
    for(let i = 0; i < albums.length; i++){
      let resultado = await AlbumC.deleteAlbumLocal({ params: { _id: albums[i]._id } });
      if(resultado != 200){
        res.status(500).json({ msg: 'Hubo dependencias que no pudieron ser borradas' });
      }
    }

    let songs = await Song.find({ autor: mongoose.Types.ObjectId(_id) });
    for(let i = 0; i < songs.length; i++){
      let resultado = await SongC.deleteSongLocal({ params: { _id: songs[i]._id } });
      if(resultado != 200){
        res.status(500).json({ msg: 'Hubo dependencias que no pudieron ser borradas' });
      }
    }

    let podcast = await Podcast.find({ autor: mongoose.Types.ObjectId(_id) });
    for(let i = 0; i < podcast.length; i++){
      let resultado = await PodcastC.deleteSongLocal({ params: { _id: podcast[i]._id } });
      if(resultado != 200){
        res.status(500).json({ msg: 'Hubo dependencias que no pudieron ser borradas' });
      }
    }

    // Eliminar el artista
    await artist.remove();
    res.status(200).json({ msg: 'Artista eliminado correctamente' });
  } catch (error) {
    res.status(500).send('Hubo un error al eliminar el artista');
    console.log(error);
  }
};

// Obtener todas las canciones de un artista
exports.getSongsOfArtist = async (req, res) => {
  const _id = req.params._id;
  
  try {
    let songs = await Song.find({autor: _id});
    if (songs.length == 0) {
      return res.status(404).json({ msg: 'Canciones no encontradas' });
    }
    else {
      return res.status(200).json(songs);
    }
  }
  catch (error) {
    res.status(500).send('Hubo un error al obtener las canciones del artista');
    console.log(error);
  }
  
};
