const { Schema, model } = require('../config/connection');

const ProductInventorySchema = new Schema({
    name: String,
    desc: String,
    quantity: {
        type     : Number,
        required : true,
        // unique   : true,
        validate : {
          validator : Number.isInteger,
          message   : '{VALUE} is not an integer value'
        }
      },

}, {

    timestamps: true, versionKey: false

})


const ProductInventory = model('product_inventories', ProductInventorySchema);

module.exports = ProductInventory