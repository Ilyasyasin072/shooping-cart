const OrderItem = require('../models/order_item')
const OrderDetail = require('../models/order_detail')

const mongoose = require('mongoose')
class OrderItemClass {

    index = async (req, res) => {
        // const order_detail = await OrderDetail.find({

        // })
        // const order_item = await OrderItem.find({
        // })
        // res.json({
        //     'order': order_item,
        //     order_deatail : order_detail
        // })
        const ObjectId = mongoose.Types.ObjectId;

        var aggregateQuery = OrderDetail.aggregate([
            {
                $match: { user_id: ObjectId('60bf13f65849505c878b7256') }
            },
            {
                $lookup: {
                    from: 'order_items',
                    localField: '_id',
                    foreignField: 'order_id', as: 'order_items'
                },
            },

        ])

        aggregateQuery.exec(function (err, result) {
            res.json(result);
        })

    }
}


const OrderClass = new OrderItemClass

module.exports = OrderClass