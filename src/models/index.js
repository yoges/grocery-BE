const Sequelize = require("sequelize");
const sequelize = require("../config/db.js");
const Grocery = require("./grocery.model.js");

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Grocery = Grocery(sequelize, Sequelize);

module.exports = db;
