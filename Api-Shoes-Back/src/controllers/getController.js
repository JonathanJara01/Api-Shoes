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

const getSpecialPrice = async (user_id) => {
  try {
    const productsDB = await Product.find({}, { __v: 0 });

    // Filtrar productos para incluir solo aquellos con specialPrices que contengan el usuario especificado
    const productsWithSpecialPrices = productsDB.filter(product => {
      return Object.keys(product.specialPrices).some(user => user === user_id);
    });

    console.log(`Productos con precios especiales para ${user_id}:`, productsWithSpecialPrices);

    return productsWithSpecialPrices;
  } catch (error) {
    console.error('Error al recuperar productos con precios especiales:', error.message);
    throw new Error('Error al recuperar productos con precios especiales');
  }
};



module.exports = {
  getAllProducts,
  getSpecialPrice
};

