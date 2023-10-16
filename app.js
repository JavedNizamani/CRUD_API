const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const studentsRoute = require('./routes/crud.route');
const studentsLoginRoute = require('./routes/login.route');


app.use(bodyParser.json());
app.use('/students',studentsRoute,studentsLoginRoute);

module.exports = app;