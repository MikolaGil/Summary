const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

const config = require('./config');

app.set('port', config.port);
app.get('/summary', (req, res) => {
    res.send('Hello World!')
});

try {

    app.listen(app.get('port'), () => {
        console.log(`Example app listening at http://localhost:${config.port}`)
        console.log(config);
    });
} catch (e) {
    console.log(e);
}


//const express = require('express');
//const app = express();
//const config = require('config');

//app.set('port', config.port);

//console.log(config.port);
//app.get('/summary', (req, res) => {
//    res.send('Hello World!')
//});

//app.listen(app.get('port'), () => {
//    console.log(`Example app listening at http://localhost:${config.port}`);
//});
