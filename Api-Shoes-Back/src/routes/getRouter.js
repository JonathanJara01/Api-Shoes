const {Router} = require('express');

const getRouter = Router();

const {allProducts} = require('../handlers/getHandler.js');



getRouter.get('/products', allProducts);




module.exports = getRouter;