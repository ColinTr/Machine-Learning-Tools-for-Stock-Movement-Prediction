const logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');

const indexRouter = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRouter);

module.exports = app;