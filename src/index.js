const app = require('./config/app');
require('./routes/routes');

// Lanzar servidor
const port = process.env.PORT || 8080 // Por si el servidor nos da un puerto sino el 8080
app.listen(port, () => {
    console.log( 'server started in ' + port);
})
