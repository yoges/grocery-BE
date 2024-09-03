const Sequelize = require("sequelize");
const config = require("./config");

const sequelize = new Sequelize(
  config.mySql.dbName,
  config.mySql.username,
  config.mySql.password,
  {
    host: config.mySql.host,
    dialect: "mariadb",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("DATABASE CONNECTED");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = sequelize;
