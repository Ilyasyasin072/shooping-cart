const fs = require('fs');

const {PRODUCT_DATA_FILE} = require('../config/json-file');

const index = (req, res) => {
   fs.readFile(PRODUCT_DATA_FILE, (err, data) => {
       const product = JSON.parse(data);

       res.json(product);
   })
}


module.exports = {
    index
}