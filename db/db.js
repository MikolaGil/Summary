const mongoose = require('mongoose');
const config = require('../config');

const uri = `mongodb+srv://${config.mongoDB.user}:${config.mongoDB.password}@cluster0.65pxh.mongodb.net/test`;

mongoose.mongo.connect(uri);

async function open(){

    return await mongoose.connect(uri);
}

mongoose.connection.on('error', function (err) {
    console.log('Cannot connect to db');
});

module.exports = open;