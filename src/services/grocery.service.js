const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const { Op } = require("sequelize");
const db = require("../models/index.js");

const Grocery = db.Grocery;

const queryGroceries = async (filter, options) => {
  let whereObj = {};
  if (filter.search) {
    whereObj.where = {
      [Op.or]: [
        { barcode: { [Op.substring]: filter.search } },
        { brand: { [Op.substring]: filter.search } },
        { product_name: { [Op.substring]: filter.search } },
      ],
    };
  }
  const groceries = await Grocery.findAll({
    ...whereObj,
    order: [[options.sortBy, options.sortDir]],
    limit: options.limit,
  });
  return groceries;
};

/**
 * Get grocery by id
 * @param {ObjectId} id
 * @returns {Promise<Grocery>}
 */
const getGroceryById = async (id) => {
  return Grocery.findByPk(id);
};

/**
 * Update grocery by id
 * @param {ObjectId} groceryId
 * @param {Object} updateBody
 * @returns {Promise<Grocery>}
 */
const updateGroceryById = async (groceryId, updateBody) => {
  const grocery = await getGroceryById(groceryId);
  if (!grocery) {
    throw new ApiError(httpStatus.NOT_FOUND, "Grocery not found");
  }
  Object.assign(grocery, updateBody);
  await grocery.save();
  return grocery;
};

module.exports = {
  queryGroceries,
  getGroceryById,
  updateGroceryById,
};
