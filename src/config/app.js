// Utilizamos Express
const express = require('express');
const app = express();

//Librerias
const path = require( 'path');
const bodyParser = require('body-parser');

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

// Configuracion
app.use(express.static(path.join(__dirname, '../public')));

//Para que se conecte Alex
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    next();
  });

module.exports = app;
