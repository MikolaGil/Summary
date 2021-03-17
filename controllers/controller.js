const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const config = require('../config');
const User = require('../user/User');

router.get('/summary', (req, res) => {
    const user = new User();
    const userInfo = user.getInfo();
    res.status(200).render('index', userInfo);
});

router.get('/pdf', (req, res) => {
    const filePath = path.join(__dirname, '..', 'public', 'pdf', config.filename);

    if (fs.existsSync(filePath)) {

        res.status(200).sendFile(filePath);
    } else {
        res.statusCode = 404;
        res.end(`File not found: ${filePath}`)
    }
});

router.get('/', (req, res) => {
    res.statusCode = 301;
    res.redirect('/web/summary');
});

module.exports = router;