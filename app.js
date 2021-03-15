const express = require('express');
const app = express();

app.set('port', 3000);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

app.use(function (req, res) {
    res.sendStatus(404);
    res.send('Page Not Found');
});