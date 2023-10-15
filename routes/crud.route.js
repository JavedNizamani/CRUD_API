const express = require('express');
const routes = express.Router();
const {createStudentsInsert} = require('../controller/crud.controller');
const {readStudentsData} = require('../controller/crud.controller');
const {readStudentsById} = require('../controller/crud.controller');
const {updateStudentsById} = require('../controller/crud.controller');
const {deleteStudentsById} = require('../controller/crud.controller');

routes.post('/add',createStudentsInsert);
routes.get('/get',readStudentsData);
routes.get('/get/:id',readStudentsById);
routes.patch('/update/:id',updateStudentsById);
routes.delete('/delete/:id',deleteStudentsById);

module.exports = routes;