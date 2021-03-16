const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

const config = require('./config');
const path = require('path');

app.set('views', path.join(__dirname,'views'));
app.set('views engine', 'ejs');
app.set('port', config.port);

//app.use(app.router);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/summary', (req, res) => {
    res.render('index');
});

try {

    app.listen(app.get('port'), () => {
        console.log(`Example app listening at http://localhost:${config.port}`)
        console.log(config);
    });

} catch (e) {
    console.log(e);
}