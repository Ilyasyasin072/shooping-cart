const User = require('../models/user');

const ApiResponser = require('../traits/ApiResponse')

const index = async (req, res) => {
    if (req.user) {
        try {
            const user = await User.find({
                _id: req.user._id
            }, ((err, user) => {
                console.log(user)
            }))
            const data = new ApiResponser('GET', user, 200);

            res.json(data.data)
        } catch (error) {
            res.json(error.message)
        }
    } else {
        res.json({
            status: 'invalid credentials'
        })
    }
}

module.exports = {
    index
}