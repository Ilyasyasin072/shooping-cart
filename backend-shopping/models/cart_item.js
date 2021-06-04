const {Schema, model} = require('../config/connection')

const CartItemSchema = new Schema({
    // relational to shopping session
    session_id: {
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

const Cart = model('cart', CartItemSchema)


module.exports = Cart