const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/about', function (req, res) {
    res.send('Tui ten la Mi')
})

app.listen(3000, () => {
    console.log('Example app listening att http://localhost:3000')
})