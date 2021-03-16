const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

const config = require('./config');
const path = require('path');
const favicon = require('serve-favicon');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', config.port);

app.use(favicon(path.join(__dirname, 'public', 'img', 'favicon.ico')));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/summary', (req, res) => {
    res.render('index');
});

try {

    app.listen(app.get('port'), () => {
        console.log(`App listening ${config.port}`);
        console.log(config);
    });

} catch (e) {
    console.log(e);
}