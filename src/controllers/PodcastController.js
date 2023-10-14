const Podcast = require('../models/PodcastModel');
const Chapter = require('../models/ChapterModel');
const FuncionesComunes = require('./FuncionesComunes');

// Obtener todos los podcasts
exports.getPodcasts = async (req, res) => {
  try {
    const podcasts = await Podcast.find();
    res.status(200).json(podcasts);
  } catch (error) {
    res.status(500).json({"mensaje": "Hubo un error al obtener los podcasts"});
    console.error(error.message);
  }
};

// Obtener un podcast por su _id
exports.getPodcastById = async (req, res) => {
  const { _id } = req.params;
  try {
    const podcast = await Podcast.findById(_id);
    if (!podcast) {
      return res.status(404).json({ msg: 'El podcast no existe' });
    }
    res.status(200).json(podcast);
  } catch (error) {
    res.status(500).json({"mensaje": "Hubo un error al obtener el podcast"});
    console.error(error.message);
  }
};

exports.getPodcastsByString = async (req, res) => {
  const { nombre } = req.params;
  try {
    const podcasts = await Podcast.find({ titulo: nombre });
    if (podcasts.length == 0) {
      return res.status(404).json({ msg: 'No existen podcasts con ese nombre' });
    }
    res.status(200).json(podcasts);
  } catch (error) {
    res.status(500).json({"mensaje": "Hubo un error al obtener los podcasts"});
    console.error(error.message);
  }
};

exports.getPodcastsByAuthor = async (req, res) => {
  const { autor } = req.params;
  try {
    const podcasts = await Podcast.find({ autor: autor });
    if (podcasts.length == 0) {
      return res.status(404).json({ msg: 'No existen podcast de ese autor' });
    }
    res.status(200).json(podcasts);
  } catch (error) {
    res.status(500).json({"mensaje": "Hubo un error al obtener los podcasts"});
    console.error(error.message);
  }
};

// Crear un nuevo podcast
exports.createPodcast = async (req, res) => {
  const { titulo, UrlPodcast, autor, descripcion, capitulos, duracion } = req.body;
  try {
    //Comprobar que existen los capituos
    if (!(await FuncionesComunes.comprobarId(req.body.capitulos, Chapter))) {
      return res.status(404).json({ "mensaje": "Capítulos no existentes proporcionados" });
    }

    //Crear el podcast
    const podcast = new Podcast({ duracion, titulo, UrlPodcast, autor, descripcion, capitulos });
    console.log(podcast);
    await podcast.save();
    res.status(201).json(podcast);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ "mensaje": "Hubo un error al crear el podcast" });
  }
};

// Actualizar un podcast por su _id
exports.updatePodcast = async (req, res) => {
  try {
    const podcast = await Podcast.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true }
    );

    if (!podcast) {
      return res.status(404).json({ "message": 'Podcast no encontrado' });
    }
    res.status(200).json(podcast);
  } catch (error) {
    res.status(500).json({ "mensaje": "Hubo un error al crear el podcast" });
    next(error);
  }
};

// Eliminar un podcast por su _id
exports.deletePodcast = async (req, res) => {
  const { _id } = req.params;
  try {
    let podcast = await Podcast.findById(_id);
    if (!podcast) {
      return res.status(404).json({ "mensaje" : "Podcast no encontrado" });
    }
    await podcast.remove();
    res.status(200).json({ "mensaje": 'Podcast eliminado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ "mensaje" : "Error al eliminar el podcast" });
  }
};
