const { DataTypes } = require("sequelize");

const Grocery = (sequelize, Sequelize) => {
  const Grocery = sequelize.define("groceries", {
    barcode: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Grocery;
};

module.exports = Grocery;
