const {Router} = require('express');
const {allProducts} = require('../handlers/getHandler')

const getRouter = Router();

getRouter.get('/', allProducts); // ruta completa http://localhost:3002/products


module.exports = getRouter;