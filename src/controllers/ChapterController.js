const Chapter = require('../models/ChapterModel');

// Obtiene todos los capítulos
const getAllChapters = async (req, res) => {
  try {
    const chapters = await Chapter.find();
    res.status(200).json(chapters);
  } catch (err) {
    res.status(500).json({"mensaje": "Hubo un error al obtener los capítulos"});
    next(err);
  }
};

// Obtiene un capítulo por su _id
const getChapterById = async (req, res) => {
  try {
    const chapter = await Chapter.findById(req.params._id);
    if (chapter == null) {
      return res.status(404).json({"mensaje": "El capítulo solicitado no existe"});
    }
    res.status(200).json(chapter);
  } catch (err) {
    res.status(500).json({"mensaje": "Hubo un error al obtener el capítulo solicitado"});
    next(err);
  }
};

// Crea un nuevo capítulo
const createChapter = async (req, res) => {
  try {
    console.log(req.body);
    const chapter = new Chapter(req.body);

    await chapter.save();
    res.status(201).json(chapter);
  } catch (err) {
    res.status(500).json({"mensaje": "Hubo un error al crear el capítulo"});
    console.log(err);
  }
};

// Actualiza un capítulo existente por su _id
const updateChapter = async (req, res, next) => {
  try {
    const chapter = await Chapter.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true }
    );

    if (!chapter) {
      return res.status(404).json({ message: 'Capitulo no encontrado' });
    }
    res.status(200).json(chapter);
  } catch (error) {
    res.status(500).json({"mensaje": "Hubo un error al actualizar el capítulo"});
    next(error);
  }
};

// Elimina un capítulo existente por su _id
const deleteChapter = async (req, res) => {
  try {
    const chapter = await Chapter.findById(req.params._id);
    if (chapter == null) {
      return res.status(404).json({"mensaje": "No se encontró el capítulo con el ID especificado."});
    }

    await chapter.remove();
    res.status(200).json({ "message": 'Capítulo eliminado correctamente' });
  } catch (err) {
    res.status(500).json({"mensaje": "Hubo un error al eliminar el capítulo."});
    next(err);
  }
};

module.exports = {
  getAllChapters,
  getChapterById,
  createChapter,
  updateChapter,
  deleteChapter
};
