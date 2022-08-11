const express = require('express');
const bodyParser = require('body-parser');
const routeHandler = require('./routes/handler.js');
require('dotenv').config();

const app = express()

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routeHandler);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});