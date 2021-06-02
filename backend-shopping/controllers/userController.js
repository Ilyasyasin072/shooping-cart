const User = require('../models/user');

const ApiResponser = require('../traits/ApiResponse') 

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config =require('../config/config');


const index = async (req, res) => {

    try {
        const user = await User.find({})
        const data = new ApiResponser('GET', user, 200);

        res.json(data.data)
    } catch (error) {
        res.json(error.message)
    }
}


const store = async (req, res) => {

    const hashedPassword = bcrypt.hashSync(req.body.password, 8)

    const user_form = {
        username: req.body.username,
        password: hashedPassword,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        telephone: req.body.telephone,
    }
    

    try {
       User.create(user_form, ((err, user)=> {
           
            var token = jwt.sign({
                id: user._id
            },
                config.secret, {
                expiresIn: 86400
            })
            
            res.json({
                auth: true,
                token: token
            })
        }))

    
    } catch (error) {
        res.json(error.message)
    }
}


module.exports = {
    index,
    store
}