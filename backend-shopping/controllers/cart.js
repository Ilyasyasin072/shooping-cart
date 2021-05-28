const fs = require('fs');
const { CART_DATA_FILE } = require('../config/json-file')

const index = async (req, res) => {
    fs.readFile(CART_DATA_FILE, (err, data) => {
        const cart = await JSON.parse(data)
        res.setHeader('Cache-Control', 'no-cache');
        res.json(cart);
    })
}

const store = (req, res) => {

}


module.exports = {
    index
}