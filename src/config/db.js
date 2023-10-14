
// Usamos mongoose que se conecta a MongoDB Atlas como middleware entre express y mongodb
const db = require('mongoose');
const local_uri = 'mongodb+srv://<admin>:<admin>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority';
const atlas_uri = "mongodb+srv://admin:admin@decibelycluster.k3opvfs.mongodb.net/?retryWrites=true&w=majority";
const base_uri = "mongodb://127.0.0.1:27017/todos";
const uri = atlas_uri;
db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${uri}`);
  }
});

module.exports = db;

