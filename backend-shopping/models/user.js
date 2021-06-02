const mongoose = require('mongoose')

const { Schema, model } = mongoose;


const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        // unique   : true,
        validate: {
            validator: String,
            message: '{VALUE} is not an integer value'
        }
    },
    password:  {
        type: String,
        required: true,
        // unique   : true,
        validate: {
            validator: String,
            message: '{VALUE} is not an integer value'
        }
    },
    first_name:  {
        type: String,
        required: true,
        // unique   : true,
        validate: {
            validator: String,
            message: '{VALUE} is not an integer value'
        }
    },
    last_name:  {
        type: String,
        required: true,
        // unique   : true,
        validate: {
            validator: String,
            message: '{VALUE} is not an integer value'
        }
    },
    email:  {
        type: String,
        required: true,
        // unique   : true,
        validate: {
            validator: String,
            message: '{VALUE} is not an integer value'
        }
    },
    telephone: {
        type: Number,
        required: true,
        // unique   : true,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },

})

const User = model('users', UserSchema);

module.exports = User