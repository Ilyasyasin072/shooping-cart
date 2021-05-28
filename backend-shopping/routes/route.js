const express = require('express');

const router = express.Router();


const product = require('../controllers/product');
const cart = require('../controllers/cart');


router.get('/product', product.index);
router.get('/cart', cart.index);

module.exports =  router;
