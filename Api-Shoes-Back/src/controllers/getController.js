const Product = require('../models/product');

// Obtener todos los productos de la base de datos
const getAllProducts = async () => {
  try {
    const productsDB = await Product.find({}, { __v: 0 }); // Excluye el campo __v
    console.log("Estos son los productos del controlador:", productsDB);
    return productsDB;
  } catch (error) {
    console.error('Error al recuperar todos los productos:', error.message);
    throw new Error('Error al recuperar todos los productos');
  }
};

module.exports = {
  getAllProducts,
};

