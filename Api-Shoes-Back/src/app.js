const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

//Rutas
const indexRouter = require('../src/routes/indexRouter')

const serverApp = express();

serverApp.use(morgan("dev"));


serverApp.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
/* Esta línea utiliza el middleware bodyParser para analizar datos codificados en la URL.
Permite al servidor manejar datos enviados como parte de la URL (por ejemplo, datos de formularios) y establece el límite para los datos entrantes en 50 megabytes. */
serverApp.use(bodyParser.json({ limit: '50mb' }));
/* Similar a la línea anterior, esto utiliza el middleware bodyParser, pero específicamente para analizar datos JSON.
Establece el límite para los datos JSON entrantes en 50 megabytes. */
serverApp.use(cookieParser());
/* Esta línea utiliza el middleware cookieParser para analizar las cookies adjuntas a la solicitud del cliente.
Facilita el trabajo con cookies en el código del lado del servidor. */
serverApp.use(morgan('dev'));
/* Esta línea utiliza el middleware morgan para el registro.
En este caso, registra información detallada sobre cada solicitud entrante en la consola en un formato amigable para el desarrollo ('dev'). */

serverApp.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Dominio con el cual se hace match
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
/* Esta función de middleware agrega encabezados HTTP a la respuesta para manejar el Intercambio de Recursos entre Orígenes (CORS).
Permite solicitudes desde 'http://localhost:5173', incluye credenciales en la solicitud, especifica los encabezados permitidos y enumera los métodos HTTP permitidos. */


serverApp.use(indexRouter);


/* Este bloque de código es un middleware de manejo de errores para un servidor Node.js. */
serverApp.use((err, req, res, next) => { 
/* Esto significa que este middleware se aplicará a todas las solicitudes entrantes al servidor serverApp */
/* Esta es una función de middleware que toma cuatro parámetros.
En el contexto de manejo de errores, se espera que el primer parámetro (err) contenga información sobre el error que ha ocurrido. */
    const status = err.status || 500;
/* Aquí se establece una variable status que representa el código de estado HTTP que se enviará como respuesta.
Si el error tiene un atributo status definido, se utilizará ese valor; de lo contrario, se establecerá en 500 (Error interno del servidor). */
    const message = err.message || err;
/* Esto establece una variable message que representa el mensaje de error que se enviará como respuesta.
Si el error tiene un atributo message definido, se utilizará ese valor; de lo contrario, se usará directamente el objeto de error (err). */
    console.error(err);
    res.status(status).send(message);
/* Se envía una respuesta al cliente con el código de estado y el mensaje de error.
Si el error tiene un mensaje definido, se enviará ese mensaje; de lo contrario, se enviará el objeto de error directamente. */
  });


module.exports = serverApp;