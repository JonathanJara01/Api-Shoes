
const server = require('./src/app');

const PORT = 3001;

server.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto: ${PORT}`)
})