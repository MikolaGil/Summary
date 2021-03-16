const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const router = require('./controllers/controller');

const config = require('./config');
const path = require('path');
const favicon = require('serve-favicon');

app.use('/', router);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', config.port);

app.use(favicon(path.join(__dirname, 'public', 'img', 'favicon.ico')));
app.use('/web', express.static(path.join(__dirname, 'public')));

app.use(function(req, res){
    res.statusCode = 301;
    res.redirect('/summary');
});

try {

    app.listen(app.get('port'), () => {
        console.log('App started');
    });

} catch (e) {
    console.log(e);
}