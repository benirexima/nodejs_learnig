const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
const product = require('./routes/router'); 
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/products';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
let port = 1311;
app.use('/products', product);

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});