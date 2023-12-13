require('dotenv').config();

const mongoose = require('mongoose');
const { MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('La Base De Datos Esta Conectada');
});


