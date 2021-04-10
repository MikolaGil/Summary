const mongoose = require('mongoose');
const config = require('../config');

async function connect(){
    const uri = `mongodb+srv://${config.mongoDB.user}:${config.mongoDB.password}@cluster0.65pxh.mongodb.net/data`;

    if (!mongoose.connection.readyState) {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    }
}

mongoose.connection.on('error', function (err) {
    console.log(`Can't connect to DB: ${err}`);
});

mongoose.connection.once('open', function () {
    console.log('Connected to DB');
});
module.exports = connect;