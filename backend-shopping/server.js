const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
var cors = require('cors')

const app = express();

const router = require('./routes/route');

app.use(cors())

app.set('port', (process.env.NODE_PORT || 3000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
});
app.use('/api', router);

app.get('/', (req, res, next) => {
    res.json({
        'data': 'data'
    })
})

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`);
  });