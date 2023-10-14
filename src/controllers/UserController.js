const User = require('../models/UserModel');
const FuncionesComunes = require('./FuncionesComunes');
const NotificationC = require('../controllers/NotificationController')
const bcrypt = require('bcrypt');
const saltRounds = 10;

// ************ INICIO DE SESION Y LOGGEO *******************
// Registrar un usuario//OKEY

const img_por_defecto_registro = "https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg";

exports.registerUser = async (req, res) => {
  const { username, _id, password } = req.body;
  try {
    let user = await User.findOne({ "_id": _id });
    if (user) {
      return res.status(400).json({ msg: 'El usuario ya existe' });
    }

    user = new User({
      "username": username,
      "_id": _id,
      "password": password,
      "Urlfoto": img_por_defecto_registro,
    });
    console.log(user);

    await user.save();

    res.status(200).json({ msg: 'Usuario registrado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).json({"mensaje": "Hubo un error al registrar el usuario"});
  }
};

// Login de un usuario//OKEY
exports.loginUser = async (req, res) => {
  const { _id, password } = req.body;

  try {
    const user = await User.findOne({ _id });
    if (!user) {
      return res.status(401).json({ msg: 'Credenciales incorrectas' });
    }

    user.isCorrectPassword(password, function(err, same){
      if(err){
        res.status(500).json({"mensaje": "Hubo un error al autenticar al usuario"});
      }
      else if(!same){
        res.status(401).json({ "mensaje": 'Credenciales incorrectas' });
      }
      else{
        res.status(200).json({ "mensaje": "Se ha registrado el usuario" });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({"mensaje": "Hubo un error al autenticar al usuario"});
  }
};





// ********* USUARIOS ***************


exports.findUserByString = async (req, res) => {
  const cadena = req.params.username;
  try {
    const usuarios = await User.find({ username: { $regex: '^' + cadena } });
    res.status(200).json({ usuarios });
  } catch (error) {
    res.status(500).json({ mensaje: 'Hubo un error al buscar los usuarios' });
    console.error(error);
  }
};


/// Obtener todos los usuarios//OKEY
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({"mensaje": "Hubo un error al obtener los usuarios"});
    next(error);
  }
};

// Obtener un usuario por su ID//OKEY
exports.getUserById = async (req, res, next) => {
  try {
    console.log(req.params._id);
    const user = await User.findById(req.params._id);
    if (!user) {
      return res.status(404).json({"mensaje": "El usuario con el ID especificado no fue encontrado"});
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({"mensaje": "Hubo un error al obtener el usuario especificado"});
    next(error);
  }
};

// Actualizar un usuario por su ID es decir el correo electronico
exports.updateUser = async (req, res, next) => {
  try {
    const { password, ...restoDatos } = req.body;
    let usuario = await User.findByIdAndUpdate(req.params.id);
    let diferencias;
    
    if(restoDatos.seguidos){
      if(restoDatos.seguidos != usuario.seguidos){
        diferencias = restoDatos.seguidos.filter(item => !usuario.seguidos.includes(item));
      }
    }
    if (!(await FuncionesComunes.comprobarId(diferencias, User))) {
      return res.status(404).json({ msg: 'Seguido no existente' });
    }

    let user = await User.findByIdAndUpdate(
      req.params.id,
      restoDatos,
      { new: true }
    );
    if (!user) {
      return res.status(404).json({"mensaje": "Usuario no encontrado"});
    }
    if(diferencias){
      for(let i = 0; i < diferencias.length; i++){
        let comparticion = diferencias[i] + " ha comenzado a seguirte";
        await NotificationC.createNotificationLocal({body:{"user": req.params.id, "message": comparticion}});
      }
    }
    if(password){
      let hashedPassword = await user.encriptPassword(password);
      user = await User.findByIdAndUpdate(
        req.params.id,
        {"password": hashedPassword},
        { new: true }
      );
      console.log(user);
    }
    res.status(200).json(user);

  } catch (error) {
    res.status(500).json({"mensaje": "Error al actualizar"});
    next(error);
  }
};

// Eliminar un usuario por su ID
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ "mensaje": 'Usuario no encontrado' });
    }
    res.status(200).json({ "mensaje": 'Usuario borrado correctamente' });
  } catch (error) {
    res.status(500).json({"mensaje": "Error al borrar el usuario"});
    next(error);
  }
};

// // Actualizar el nombre de usuario
// exports.updateUsername = async (req, res, next) => {
//   try {
//     const { username } = req.body;
//     const user = await User.findByIdAndUpdate(req.params.id, { username }, { new: true });
//     if (!user) {
//       return res.status(404).json({ message: 'Usuario no encontrado' });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     next(error);
//   }
// };


// // Actualizar la contraseña del usuario
// exports.updatePassword = async (req, res, next) => {
//   try {
//     const { password } = req.body;
//     const user = await User.findById(req.params.id);
//     if (!user) {
//       return res.status(404).json({ message: 'Usuario no encontrado' });
//     }
//     user.password = password;
//     const updatedUser = await user.save();
//     res.status(200).json(updatedUser);
//   } catch (error) {
//     next(error);
//   }
// };




// // Añade una foto al perfil del usuario
// exports.addUserPhoto = async (req, res, next) => {
//   try {
//     // Comprobamos si se ha subido un archivo
//     if (!req.file) {
//       return res.status(400).json({ message: 'No se ha subido ninguna imagen' });
//     }
//     // Obtenemos el usuario
//     const user = await User.findById(req.params.id);
//     if (!user) {
//       return res.status(404).json({ message: 'Usuario no encontrado' });
//     }
//     // Actualizamos la URL de la foto del usuario
//     user.Urlfoto = req.file.path;
//     await user.save();
//     res.status(200).json({ message: 'Foto actualizada correctamente', url: user.Urlfoto });
//   } catch (error) {
//     next(error);
//   }
// };





// // ********* CANCIONES ***************

// // Agrega una canción a la lista de canciones del usuario
// exports.addSongToList = async (req, res, next) => {
//   try {
//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       { $addToSet: { canciones: req.body.songId } },
//       { new: true }
//     );
//     if (!user) {
//       return res.status(404).json({ message: 'Usuario no encontrado' });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     next(error);
//   }
// };

// // Quita una canción de la lista de canciones del usuario
// exports.removeSongFromList = async (req, res, next) => {
//   try {
//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       { $pull: { canciones: req.body.songId } },
//       { new: true }
//     );
//     if (!user) {
//       return res.status(404).json({ message: 'Usuario no encontrado' });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     next(error);
//   }
// };


// // ********* CANCIONES FAVORITAS ***************

// // Agrega una canción a la lista de canciones favoritas del usuario
// exports.addSongToFavorites = async (req, res, next) => {
//   try {
//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       { $push: { cancionesfav: req.body.songId } },
//       { new: true }
//     ).populate('cancionesfav');

//     if (!user) {
//       return res.status(404).json({ message: 'Usuario no encontrado' });
//     }

//     res.status(200).json(user);
//   } catch (error) {
//     next(error);
//   }
// };

// // Quita una canción de la lista de canciones favoritas del usuario
// exports.removeSongFromFavorites = async (req, res, next) => {
//   try {
//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       { $pull: { cancionesfav: req.body.songId } },
//       { new: true }
//     ).populate('cancionesfav');

//     if (!user) {
//       return res.status(404).json({ message: 'Usuario no encontrado' });
//     }

//     res.status(200).json(user);
//   } catch (error) {
//     next(error);
//   }
// };


// // ********* PLAYLISTS ***************

// // Agrega una playlist a la lista de playlists del usuario
// exports.addPlaylistToUser = async (req, res, next) => {
//   try {
//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       { $addToSet: { playlists: req.body.playlistId } },
//       { new: true }
//     );
//     if (!user) {
//       return res.status(404).json({ message: 'Usuario no encontrado' });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     next(error);
//   }
// };

// // Elimina una playlist de la lista de playlists del usuario
// exports.removePlaylistFromUser = async (req, res, next) => {
//   try {
//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       { $pull: { playlists: req.params.playlistId } },
//       { new: true }
//     );
//     if (!user) {
//       return res.status(404).json({ message: 'Usuario no encontrado' });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     next(error);
//   }
// };


// // ********* CARPETAS ***************

// // Añade una carpeta a la lista de carpetas de un usuario
// exports.addFolderToUser = async (req, res, next) => {
//   const { userId, folderId } = req.params;
//   try {
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: 'Usuario no encontrado' });
//     }
//     user.carpetas.push(folderId);
//     await user.save();
//     res.status(200).json(user);
//   } catch (error) {
//     next(error);
//   }
// };

// // Quita una carpeta de la lista de carpetas de un usuario
// exports.removeFolderFromUser = async (req, res, next) => {
//   const { userId, folderId } = req.params;
//   try {
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: 'Usuario no encontrado' });
//     }
//     user.carpetas = user.carpetas.filter((id) => id.toString() !== folderId);
//     await user.save();
//     res.status(200).json(user);
//   } catch (error) {
//     next(error);
//   }
// };




// // ********* ALBUMES ***************


// // Agrega un álbum a la lista de álbumes del usuario
// exports.addAlbumToUser = async (req, res, next) => {
//   try {
//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       { $push: { albumes: req.body.albumId } },
//       { new: true }
//     ).populate('albumes');

//     if (!user) {
//       return res.status(404).json({ message: 'Usuario no encontrado' });
//     }

//     res.status(200).json(user);
//   } catch (error) {
//     next(error);
//   }
// };

// // Quita un álbum de la lista de álbumes del usuario
// exports.removeAlbumFromUser = async (req, res, next) => {
//   try {
//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       { $pull: { albumes: req.body.albumId } },
//       { new: true }
//     ).populate('albumes');

//     if (!user) {
//       return res.status(404).json({ message: 'Usuario no encontrado' });
//     }

//     res.status(200).json(user);
//   } catch (error) {
//     next(error);
//   }
// };

// // ********* PODCASTS ***************

// // Agrega un podcast a la lista de podcasts seguidos por el usuario
// exports.addPodcastToFollow = async (req, res, next) => {
//   try {
//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       { $push: { podcasts: req.body.podcastId } },
//       { new: true }
//     ).populate('podcasts');

//     if (!user) {
//       return res.status(404).json({ message: 'Usuario no encontrado' });
//     }

//     res.status(200).json(user);
//   } catch (error) {
//     next(error);
//   }
// };

// // Elimina un podcast de la lista de podcasts seguidos por el usuario
// exports.removePodcastFromFollow = async (req, res, next) => {
//   try {
//     const user = await User.findById(req.params.userId).populate('podcasts');
//     const podcast = await Podcast.findById(req.params.podcastId);

//     if (!user || !podcast) {
//       return res.status(404).json({ message: 'Usuario o podcast no encontrado' });
//     }

//     // Comprobamos si el usuario sigue el podcast
//     if (!user.podcasts.includes(podcast._id)) {
//       return res.status(400).json({ message: 'El usuario no sigue este podcast' });
//     }

//     // Eliminamos el podcast de la lista de podcasts seguidos por el usuario
//     const index = user.podcasts.indexOf(podcast._id);
//     user.podcasts.splice(index, 1);

//     // Guardamos los cambios
//     await user.save();

//     res.status(200).json(user);
//   } catch (error) {
//     next(error);
//   }
// };


// // ********* SEGUIDOS ***************


// // Agrega un usuario a la lista de usuarios seguidos por el usuario
// exports.addUserToFollowing = async (req, res, next) => {
//   try {
//     const userId = req.params.id;
//     const followingUserId = req.body.followingUserId;

//     const updatedUser = await User.findByIdAndUpdate(
//       userId,
//       { $addToSet: { seguidos: followingUserId } },
//       { new: true }
//     ).populate('seguidos');

//     if (!updatedUser) {
//       return res.status(404).json({ message: 'Usuario no encontrado' });
//     }

//     res.status(200).json(updatedUser);
//   } catch (error) {
//     next(error);
//   }
// };

// // Quita un usuario de la lista de usuarios seguidos por el usuario
// exports.removeUserFromFollowing = async (req, res, next) => {
//   try {
//     const userId = req.params.id;
//     const followingUserId = req.body.followingUserId;

//     const updatedUser = await User.findByIdAndUpdate(
//       userId,
//       { $pull: { seguidos: followingUserId } },
//       { new: true }
//     ).populate('seguidos');

//     if (!updatedUser) {
//       return res.status(404).json({ message: 'Usuario no encontrado' });
//     }

//     res.status(200).json(updatedUser);
//   } catch (error) {
//     next(error);
//   }
// };



// // ********* SEGUIDORES ***************


// // Agrega un seguidor
// exports.addUserToFollowers = async (req, res, next) => {
//   try {
//     const userId = req.params.id;
//     const followerUserId = req.body.followerUserId;

//     const updatedUser = await User.findByIdAndUpdate(
//       userId,
//       { $addToSet: { seguidores: followerUserId } },
//       { new: true }
//     ).populate('seguidores');

//     if (!updatedUser) {
//       return res.status(404).json({ message: 'Usuario no encontrado' });
//     }

//     res.status(200).json(updatedUser);
//   } catch (error) {
//     next(error);
//   }
// };

// // Quita un usuario de la lista de usuarios que siguen al usuario
// exports.removeUserFromFollowers = async (req, res, next) => {
//   try {
//     const userId = req.params.id;
//     const followerUserId = req.body.followerUserId;

//     const updatedUser = await User.findByIdAndUpdate(
//       userId,
//       { $pull: { seguidores: followerUserId } },
//       { new: true }
//     ).populate('seguidores');

//     if (!updatedUser) {
//       return res.status(404).json({ message: 'Usuario no encontrado' });
//     }

//     res.status(200).json(updatedUser);
//   } catch (error) {
//     next(error);
//   }
// };


// // Actualizar el campo escuchando y momento del usuario
// exports.updateListening = async (req, res) => {
//   const { id } = req.params;
//   const { songId, moment } = req.body;

//   try {
//     const user = await User.findById(id);
//     if (!user) {
//       return res.status(404).json({ msg: 'Usuario no encontrado' });
//     }

//     // Actualizar los campos
//     user.escuchando = songId;
//     user.momento = moment;

//     // Guardar cambios en la base de datos
//     await user.save();

//     res.json(user);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Hubo un error');
//   }
// };

// // Obtener el campo escuchando y momento del usuario
// exports.getListening = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const user = await User.findById(id).populate('escuchando');
//     if (!user) {
//       return res.status(404).json({ msg: 'Usuario no encontrado' });
//     }

//     const listening = {
//       song: user.escuchando,
//       moment: user.momento
//     }

//     res.json(listening);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Hubo un error');
//   }
// };

// // Obtener las playlists de un usuario por su ID
// exports.getUserPlaylists = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const user = await User.findById(id).populate('playlists');
//     if (!user) {
//       return res.status(404).json({ msg: 'Usuario no encontrado' });
//     }
//     res.json(user.playlists);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Hubo un error');
//   }
// };

// // Obtener los albumes de un usuario por su ID
// exports.getUserAlbums = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const user = await User.findById(id).populate('albumes');
//     if (!user) {
//       return res.status(404).json({ msg: 'Usuario no encontrado' });
//     }
//     res.json(user.albumes);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Hubo un error');
//   }
// };

// // Obtener las canciones favoritas de un usuario por su ID
// exports.getUserFavoriteSongs = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const user = await User.findById(id).populate('cancionesfav');
//     if (!user) {
//       return res.status(404).json({ msg: 'Usuario no encontrado' });
//     }
//     res.json(user.cancionesfav);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Hubo un error');
//   }
// };

// // Obtener los artistas seguidos de un usuario por su ID
// exports.getUserFollowedArtists = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const user = await User.findById(id).populate('artistas');
//     if (!user) {
//       return res.status(404).json({ msg: 'Usuario no encontrado' });
//     }
//     res.json(user.artistas);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Hubo un error');
//   }
// };

// // Obtener los podcasts suscritos de un usuario por su ID
// exports.getUserSubscribedPodcasts = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const user = await User.findById(id).populate('podcasts');
//     if (!user) {
//       return res.status(404).json({ msg: 'Usuario no encontrado' });
//     }
//     res.json(user.podcasts);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Hubo un error');
//   }
// };

// // Obtener las carpetas de un usuario por su ID
// exports.getUserFolders = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const user = await User.findById(id).populate('carpetas');
//     if (!user) {
//       return res.status(404).json({ msg: 'Usuario no encontrado' });
//     }
//     res.json(user.carpetas);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Hubo un error');
//   }
// };

// // Obtener las canciones de un usuario
// exports.getUserSongs = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const user = await User.findById(id).populate('canciones');
//     if (!user) {
//       return res.status(404).json({ msg: 'Usuario no encontrado' });
//     }
//     res.json(user.canciones);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Hubo un error');
//   }
// };


  
