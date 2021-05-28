const express = require('express');

const router = express.Router();
require('express-router-group');

const product = require('../controllers/product');
const cart = require('../controllers/cart');


router.group('/v1', (router) => {
    router.get('/product', product.index);
router.get('/cart', cart.index);
})

module.exports =  router;
