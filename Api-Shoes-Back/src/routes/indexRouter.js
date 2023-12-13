// En indexRouter.js
const express = require('express');
const getRouter = require('./getRouter.js');

const indexRouter = express.Router();

indexRouter.use('/products', getRouter);

module.exports = indexRouter;
