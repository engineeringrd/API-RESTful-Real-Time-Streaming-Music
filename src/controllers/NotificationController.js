const Notification = require('../models/NotificationModel');
const User = require('../models/UserModel');

// Obtener todas las notificaciones de un usuario
//Okey todos casos
exports.getNotificationsByUser = async (req, res) => {
  try {
    usuario = await User.findById( req.params.userId).populate('user');
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no existe' });
    }
    const notifications = await Notification.find({ user: req.params.userId });
    res.status(200).json(notifications);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ mensaje: 'Hubo un error al obtener las notificaciones del usuario' });
  }
};


exports.createNotificationLocal = async (req) => {
  const { user,  message } = req.body;
  try{

    usuario = await User.findById(user).populate('user');
    if (!usuario) {
      return 404;
    }

    const notification = new Notification({ user, message, created_at: new Date().toISOString() });
    let x = await notification.save();
    console.log(x);
    return 201;
      
  } catch (error) {
    console.log(error);
      return 500;
  }
}

// Crear una nueva notificación 
//OKEY todos casos
exports.createNotification = async (req, res) => {
  let resultado = await this.createNotificationLocal(req);

  switch(resultado){
    case 201:
      res.status(201).json({ mensaje: 'Notificación creada exitosamente.' });
      break;
    case 404:
      res.status(404).json({ mensaje: 'Usuario no existe' });
      break;
    default:
      res.status(500).json({ mensaje: 'Hubo un error al crear la notificación' });
      break;
    
  }
};

// Eliminar todas las notificaciones de un usuario
//Okey todos los casos
exports.deleteAllNotificationsByUser = async (req, res) => {
  try {
    console.log(req.params.id);
    const usuario = await User.findById(req.params.id);
    console.log(usuario);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    await Notification.deleteMany({ user: usuario._id });
    res.status(200).json({ mensaje: 'Notificaciones eliminadas exitosamente.' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ mensaje: 'Error al eliminar las notificaciones.' });
  }
};

// Eliminar una notificación por su _id
//Okey todos casos
exports.deleteNotificationById = async (req, res) => {
  try {
    const notificacion = await Notification.findById(req.params.id);
    if (!notificacion) {
      return res.status(404).json({ mensaje: 'No se encontró la notificación especificada' });
    }
    await Notification.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: 'Notificación eliminada exitosamente.' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ mensaje: 'Hubo un error al eliminar la notificación' });
  }
};
