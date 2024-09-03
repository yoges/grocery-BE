const Joi = require("joi");

const getGroceries = {
  query: Joi.object().keys({
    search: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    sortDir: Joi.string(),
  }),
};

const getGrocery = {
  params: Joi.object().keys({
    groceryId: Joi.number().integer(),
  }),
};

const updateGrocery = {
  params: Joi.object().keys({
    groceryId: Joi.number().integer(),
  }),
  body: Joi.object()
    .keys({
      brand: Joi.string(),
      product_name: Joi.string(),
      barcode: Joi.number().integer(),
    })
    .min(1),
};

module.exports = {
  getGroceries,
  getGrocery,
  updateGrocery,
};
