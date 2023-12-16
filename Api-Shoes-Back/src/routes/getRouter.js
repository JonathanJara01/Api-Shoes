const {Router} = require('express');
const {allProducts , specialPrice} = require('../handlers/getHandler')

const getRouter = Router();

getRouter.get('/', allProducts); // ruta completa http://localhost:3002/products
getRouter.get('/price/:user_id/:nombre_producto', specialPrice); // ruta completa http://localhost:3002/id del usuario/nombre del producto

module.exports = getRouter;