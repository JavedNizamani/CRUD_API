const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const studentsRoute = require('./routes/crud.route');


app.use(bodyParser.json());
app.use('/students',studentsRoute);

module.exports = app;