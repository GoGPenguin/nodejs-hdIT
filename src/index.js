import express from 'express';
import configViewEngine from './configs/viewEngine';
require('dotenv').config();
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// app.use(morgan('combined'));

configViewEngine(app);

app.get('/', function (req, res) {
    res.render('index.ejs')
});

app.get('/about', function (req, res) {
    res.send('Tui ten la Mi')
})

app.listen(port, () => {
    console.log('Example app listening att http://localhost:3000')
})