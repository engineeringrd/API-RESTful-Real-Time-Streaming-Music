const db = require('../config/db');

const NotificationSchema = new db.Schema({
  user: {type: String, required: true},
  //followed: {type: String, ref: 'User', required: true},
  message: {type: String, required: true},
  created_at: { type: String, required: true},
});

module.exports = db.model('Notification', NotificationSchema);
