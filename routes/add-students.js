const express = require('express');
const router = express.Router();
const add = require('../controller/students.create');

router.post('/add',add.createStudents);

module.exports = router;