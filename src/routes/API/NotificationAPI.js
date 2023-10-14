const notificationController = require('../../controllers/NotificationController');
const app = require('../../config/app');

// ******** NOTIFICACIONES **********

// Obtener todas las notificaciones de un usuario
app.get('/notifications/:userId', notificationController.getNotificationsByUser);

// Crear una nueva notificación
app.post('/notifications', notificationController.createNotification);

//Borrar todas las notificaciones de un usuario
app.delete('/notifications/user/:id', notificationController.deleteAllNotificationsByUser);

// Eliminar una notificación existente
app.delete('/notifications/:id', notificationController.deleteNotificationById);

module.exports = app;


