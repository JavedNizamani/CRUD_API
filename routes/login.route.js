const express = require('express');
const loginRoute = express.Router();
const {loginStudent} = require('../controller/login.controller');

loginRoute.post('/login',loginStudent);

module.exports = loginRoute;