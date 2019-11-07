var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var redis = require('redis');


var app  = express();

app.set('views', path.join(__dirname, 'views'))
