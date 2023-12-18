

const server = require('./src/app.js');
require('./src/dataBase.js');
require('dotenv').config();

const {PORT} = process.env || 3002;

server.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto: ${PORT}`)
});