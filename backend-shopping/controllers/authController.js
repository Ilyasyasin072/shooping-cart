const User = require('../models/user');
const config = require('../config/config');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
   
    try {
        User.findOne({
            email: req.body.email
        }, ((err, user) => {
            if (err) throw err;
            if(!user || !user.comparePassword(req.body.password)) {
                return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
            }
            return res.json({ token: jwt.sign({ email: user.email, _id: user._id }, config.secret) });
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
    profile
}