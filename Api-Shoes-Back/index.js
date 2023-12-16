

const server = require('./src/app.js');
require('./src/dataBase.js');

const PORT = process.env.PORT || 3002;

server.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto: ${PORT}`)
});