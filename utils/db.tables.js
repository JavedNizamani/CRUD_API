const {Sequelize} = require('sequelize');
const sequelize = require('./db');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.std = require('../model/students')(sequelize, Sequelize);
db.sequelize.sync({force: false});

module.exports = db;