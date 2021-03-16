const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const config = require('../config');

router.get('/summary', (req, res) => {
    res.status(200).render('index');
});

router.get('/pdf', (req, res) => {
    const filePath = path.join(__dirname, '..', 'public', 'pdf', config.filename);

    if (fs.existsSync(filePath)) {

        res.status(200).download(filePath);
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