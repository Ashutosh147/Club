"use strict";

var express = require('express');

var path = require('path');

var fs = require('fs');

var app = express();
var port = 80; //express specific stuff

app.use('/static', express["static"]('static')); //for serving static file

app.use(express.urlencoded()); //pug specific stuff

app.set('viewengine', 'pug'); //set the template engin as pug

app.set('views', path.join(__dirname, 'views')); //endpoints

app.get('/', function (req, res) {});