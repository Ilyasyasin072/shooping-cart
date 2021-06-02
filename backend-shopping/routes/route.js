const express = require('express');

var cors = require('cors')
const router = express.Router();
require('express-router-group');

const productController = require('../controllers/productController');
const cart = require('../controllers/cart');
const productCategory = require('../controllers/productCategoryController');
const productInventory = require('../controllers/productInventoryController');
const productDiskon = require('../controllers/discountController');
const userController = require('../controllers/userController');

router.group('/v1', (router) => {
    
    router.group('/auth', (router) => {
        router.post('/register', userController.store)
    })
    
    router.group('/product', (router) => {
        router.get('/', productController.index);
        router.post('/create',  productController.store)

        router.group('/category', (router) => {
            router.get('/', productCategory.index); 
            router.post('/create', productCategory.store);
        })

        router.group('/inventory', (router) => {
            router.get('/', productInventory.index)
            router.post('/create', productInventory.store)
        })

        router.group('/discount', (router) => {
            router.get('/', productDiskon.index)
            router.post('/create', productDiskon.store)
        })
    })
    
    router.get('/cart', cart.index);
})

module.exports = router;
