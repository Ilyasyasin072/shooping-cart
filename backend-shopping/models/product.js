const { Schema, model } = require('../config/connection');

const ProductSchema = new Schema({
    name: String,
    desc: String,
    SKU: String,
    category_id : Schema.ObjectId,
    inventory_id : Schema.ObjectId,
    price: {
        type     : Number,
        required : true,
        // unique   : true,
        validate : {
          validator : Number.isInteger,
          message   : '{VALUE} is not an integer value'
        }
      },
      discount_id: Schema.ObjectId,
}, {

    timestamps: true, versionKey: false

})

const Product = model('Products', ProductSchema);

module.exports = Product