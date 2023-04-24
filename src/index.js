import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';

require('dotenv').config();
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// app.use(morgan('combined'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set up view engine
configViewEngine(app);

//init webroute
initWebRoute(app);

app.listen(port, () => {
    console.log('Example app listening att http://localhost:3000')
})