const {Schema, model} = require('../config/connection')

const OrderItemSchema = new Schema({
    // relation to order_detail
    order_id: {
        type: Number,
        required: true,
        validated: {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    product_id: {
        type: Number,
        required: true,
        validated: {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    quantity: {
        type: Number,
        required: true,
        validated: {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    }
}, {
    timestamps: true, versionKey: false
})

const OrderItem = model('order_item', OrderItemSchema)


module.exports = OrderItem