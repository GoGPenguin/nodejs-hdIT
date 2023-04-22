//const express = require('express');
import express from 'express';
import configViewEngine from './configs/viewEngine';
const morgan = require('morgan');
const path = require('path');
const app = express();

// app.use(morgan('combined'));

configViewEngine(app);

app.get('/', function (req, res) {
    res.render('index.ejs')
});

app.get('/about', function (req, res) {
    res.send('Tui ten la Mi')
})

app.get('/newss', function (req, res) {
    res.send('Tui ten la Mi')
})

app.listen(3000, () => {
    console.log('Example app listening att http://localhost:3000')
})