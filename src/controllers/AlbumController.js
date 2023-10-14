const Album = require('../models/AlbumModel');
const Song = require('../models/SongModel');
const Artist = require('../models/ArtistModel');
const FuncionesComunes = require('./FuncionesComunes');

// Obtener todos los álbumes
exports.getAllAlbums = async (req, res) => {
  try {
    const albums = await Album.find().populate('artista', 'nombre');
    res.status(200).json(albums);
  } catch (error) {
    res.status(500).json({mensaje : "Hubo un error al obtener los albumes"});
    console.log(error);
  }
};

// Obtener un álbum por su _id
exports.getAlbumById = async (req, res) => {
  const { _id } = req.params;

  try {
    const album = await Album.findById(_id).populate('artista', 'nombre');
    if (!album) {
      return res.status(404).json({ msg: 'Álbum no encontrado' });
    }
    res.status(200).json(album);
  } catch (error) {
    res.status(500).send('Hubo un error');
    console.log(error);
  }
};

// Crear un nuevo álbum
exports.createAlbum = async (req, res) => {
  const { titulo, foto, artista, canciones } = req.body;

  try {
    //Comprobar que existe el autor y todas las canciones
    if (!(await FuncionesComunes.comprobarId(req.body.canciones, Song))) {
      return res.status(500).json({ msg: 'Canción no existente' });
    }
    if (!(await FuncionesComunes.comprobarId(req.body.artista, Artist))) {
      return res.status(500).json({ msg: 'Autor no existente' });
    }

    //Crear el album
    let album = new Album({
      titulo,
      foto,
      artista,
      canciones
    });
    await album.save();
    res.status(201).json({ mensaje: "Álbum creado correctamente" });
  } catch (error) {
    res.status(500).json({mensaje: "Hubo un error al crear el álbum"});
    console.log(error);
  }
};

// Actualizar un álbum por su _id
exports.updateAlbum = async (req, res) => {
  try {
    //Comprobar que existe el autor y todas las canciones
    if (!(await FuncionesComunes.comprobarId(req.body.canciones, Song))) {
      return res.status(500).json({ msg: 'Canción no existente' });
    }
    if (!(await FuncionesComunes.comprobarId(req.body.autor, Artist))) {
      return res.status(500).json({ msg: 'Autor no existente' });
    }

    //Modificar el album
    const album = await Album.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true }
    );

    if (!album) {
      return res.status(404).json({"mensaje": "Álbum no encontrado"});
    }
    res.status(200).json({     "mensaje": "Álbum actualizado correctamente" });
  } catch (error) {
    res.status(500).json({"mensaje": "Hubo un error al actualizar el álbum"});
    next(error);
  }
};

exports.deleteAlbumLocal = async (req) => {
  const { _id } = req.params;
  try{
    let album = await Album.findById(_id);
    if (!album) {
      return 404;
    }
    // Eliminar el álbum
    await album.remove();
    return 200;
      
  } catch (error) {
      return 500;
  }
}

// Eliminar un álbum por su _id
exports.deleteAlbum = async (req, res) => {
  
  let resultado = await this.deleteAlbumLocal(req);
  switch (resultado){
    case 200:
      res.status(200).json({ msg: 'Álbum eliminado correctamente' });
      break;
    case 404:
      res.status(404).json({ msg: 'Álbum no encontrado' });
      break;
    default:
      res.status(500).json({"mensaje": "Hubo un error al eliminar el álbum"});
      break;
    } 
};
