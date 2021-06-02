const fs = require('fs');
const { CART_DATA_FILE } = require('../config/json-file')

const index = (req, res) => {
    fs.readFile(CART_DATA_FILE, (err, data) => {
        const cart = JSON.parse(data)
        res.setHeader('Cache-Control', 'no-cache');
        res.json(cart);
    })
}

const store = (req, res) => {

    fs.readFile(CART_DATA_FILE, (err, data) => {
        const cart = JSON.parse(data)
        const new_cart = {
            id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            image_tag: req.body.image_tag,
            quantity: 1
        }

        console.log(cart)

        let card_exists = false

        cart.map(product => {
            if(product.id === new_cart.id) {
                cart.quantity++
                card_exists = true
            }
        })

        if(!card_exists) cart.push(new_cart);

        fs.writeFile(CART_DATA_FILE, JSON.stringify(cart, null, 4), () => {
            res.setHeader('Cache-Control', 'no-cache');
            res.json(cart);
        })
    })

}


module.exports = {
    index,
    store
}