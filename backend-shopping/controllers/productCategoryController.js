const ProductCategory = require('../models/product_category');
const ApiResponser = require('../traits/ApiResponse');
const mongoose = require('mongoose');

const index = async (req, res) => {

    try {

        const customer = await ProductCategory.find()

        const data = new ApiResponser('GET', customer, 200);

        res.json(data.data)
    
    } catch (error) {

        const err = new ApiResponser('GET', error.message, 200);

        res.json(err)
    }
}

const store = async (req, res) => {

    const product_category = {
        name: req.body.name,
        desc: req.body.desc,
    }

    try {
        const productCategory = await ProductCategory.create(product_category);

        res.json({
            'method': 'POST',
            'result': productCategory
        })
    } catch (error) {
        res.json(error.message)
    }
}

const show = async (req, res) => {
    const ObjectId = mongoose.Types.ObjectId;
    let aggregateQuery = ProductCategory.aggregate([
        {
            "$match": {
                _id : ObjectId(req.params.id)
                // $search: {
                //     'index': 'search_product',
                //     'text': {
                //         'query': "{ name : " + search.name + "}",
                //         'path': {
                //             'wildcard': '*'
                //         }
                //     }
                // },
            },
        },
        {
            $lookup: {
                from: 'products',
                localField: '_id',
                foreignField: 'category_id', as: 'products'
            },
        },
      
        {
            $lookup: {
                from: 'product_inventories',
                localField: 'products.inventory_id',
                foreignField: '_id', as: 'product_inventories'
            },
        },
        //   {

        //     $unwind: {
        //         path : "$product_inventories",
        //         preserveNullAndEmptyArrays: true
        //     }
            
        // },
    ])

    aggregateQuery.exec(function (err, result) {
        res.json(result);
    })
}


module.exports = {
    index,
    store,
    show
}