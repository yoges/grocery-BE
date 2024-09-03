const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { groceryService } = require("../services");

const getGroceries = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["search"]);
  const options = pick(req.query, ["sortBy", "sortDir", "limit"]);
  const result = await groceryService.queryGroceries(filter, options);
  res.send(result);
});

const getGrocery = catchAsync(async (req, res) => {
  const grocery = await groceryService.getGroceryById(req.params.groceryId);
  if (!grocery) {
    throw new ApiError(httpStatus.NOT_FOUND, "Grocery not found");
  }
  res.send(grocery);
});

const updateGrocery = catchAsync(async (req, res) => {
  const grocery = await groceryService.updateGroceryById(
    req.params.groceryId,
    req.body
  );
  res.send(grocery);
});

module.exports = {
  getGroceries,
  getGrocery,
  updateGrocery,
};
