

const server = require('./src/app.js');
require('./src/dataBase.js');
require('dotenv').config();

const {PORT} = process.env;

server.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto: ${PORT}`)
});