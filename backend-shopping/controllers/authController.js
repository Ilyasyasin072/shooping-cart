const User = require('../models/user');
const config = require('../config/config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
   
    try {
        User.findOne({
            email: req.body.email
        }, ((err, user) => {
            if (err) res.json({status: 'check password anda'});
            if (!user || !user.comparePassword(req.body.password)) {
                return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
            }
            const user_data = {
                name: user.first_name,
                status: user.status,
            }
            return res.json({ user: user_data, token: jwt.sign({ email: user.email, status: user.status, _id: user._id }, config.secret) });
        }))
    } catch (error) {
        res.json(error.message)
    }

}


const register = async (req, res) => {

    const hashedPassword = bcrypt.hashSync(req.body.password, 10)

    const user_form = {
        username: req.body.username,
        hash_password: hashedPassword,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        telephone: req.body.telephone,
        status: req.body.status
    }
    

    try {
       User.create(user_form, ((err, user)=> {
           
            var token = jwt.sign({
                id: user._id,
                status: user.status
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


const profile = async (req, res) => {
    if(req.user) {
        res.json({
            data: req.user,
            status: 'valid'
        })
    } else {
        res.json({
            data: req.user,
            status: 'invalid'
        })
    }
}


module.exports = {
    login,
    register,
    profile
}