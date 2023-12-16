// En indexRouter.js
const express = require('express');
const getRouter = require('./getRouter.js');

const indexRouter = express.Router();

indexRouter.use('/products', getRouter);
indexRouter.use('/price/:user_id/:nombre_producto', getRouter)

module.exports = indexRouter;
