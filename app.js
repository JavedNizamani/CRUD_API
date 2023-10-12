const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const addStudentsRoute = require('./routes/add-students');

app.use(bodyParser.json());
app.use('/students',addStudentsRoute);

module.exports = app;