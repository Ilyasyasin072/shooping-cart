const Product = require('../models/product');
const ApiResponser = require('../traits/ApiResponse');
const mongoose = require('mongoose')

const index = async (req, res) => {

    var aggregateQuery = Product.aggregate([

        {
            $lookup: {
                from: 'product_categories',
                localField: 'category_id',
                foreignField: '_id', as: 'product_categories'
            },
        },
        {

            $unwind: "$product_categories"

        },
        {
            $lookup: {
                from: 'product_inventories',
                localField: 'inventory_id',
                foreignField: '_id', as: 'product_inventories'
            },
        },
        {

            $unwind: "$product_inventories"

        },

        {
            $lookup: {
                from: 'discounts',
                localField: 'discount_id',
                foreignField: '_id', as: 'discounts'
            },
        },
        {

            $unwind: "$discounts"

        },

    ])

    aggregateQuery.exec(function (err, result) {
        const data = new ApiResponser('GET', result, 200)
        res.json(data.data);
    })

    // const product = await Product.find({})
    // const data = new ApiResponser('GET', product, 200);

    // try {

    //     res.json(data.data)

    // } catch (error) {

    //     res.json(err)

    // }
}


const store = async (req, res) => {

    const product = {
        category_id: req.body.category_id,
        inventory_id: req.body.inventory_id,
        price: req.body.price,
        discount_id: req.body.discount_id
    }

    try {
        const productInventory = await Product.create(product);

        res.json({
            'method': 'POST',
            'result': productInventory
        })
    } catch (error) {
        res.json(error.message)
    }
}

const show = async(req, res) => {
    try {

        const ObjectId = mongoose.Types.ObjectId;

        var aggregateQuery = Product.aggregate([
            {
                $match: { _id: ObjectId(req.params.id) }
            },
            {
                $lookup: {
                    from: 'product_categories',
                    localField: 'category_id',
                    foreignField: '_id', as: 'product_categories'
                },
            },
            {
    
                $unwind: "$product_categories"
    
            },
            {
                $lookup: {
                    from: 'product_inventories',
                    localField: 'inventory_id',
                    foreignField: '_id', as: 'product_inventories'
                },
            },
            {
    
                $unwind: "$product_inventories"
    
            },
    
            {
                $lookup: {
                    from: 'discounts',
                    localField: 'discount_id',
                    foreignField: '_id', as: 'discounts'
                },
            },
            {
    
                $unwind: "$discounts"
    
            },
    
        ])
    
        aggregateQuery.exec(function (err, result) {
            const data = new ApiResponser('GET', result, 200)
            res.json(data.data);
        })
        
    } catch (error) {

        res.json(error.message)
        
    }
}


module.exports = {
    index,
    store,
    show
}