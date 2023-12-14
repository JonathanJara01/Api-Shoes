/* los handlers son para conectar 
las respuesta de mi servidor con las fuentes externas
que hacen las peticiones. */

const { getAllProducts } = require('../controllers/getController');

const allProducts = async (req, res) => {
  try {
    const shoes = await getAllProducts();
    res.status(200).json(shoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  allProducts,
};
