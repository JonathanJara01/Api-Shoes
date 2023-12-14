const Product = require('../models/product');

// Obtener todos los productos de la base de datos
const getAllProducts = async () => {
  try {
    const productsDB = await Product.find({}, { __v: 0 }); // Excluye el campo __v
    console.log("este es el producto controller"+productsDB)
    return productsDB;
  } catch (error) {
    throw new Error('Error al recuperar todos los productos');
  }
};

module.exports = {
  getAllProducts,
};
