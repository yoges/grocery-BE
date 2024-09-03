const express = require("express");
const validate = require("../../middlewares/validate");
const groceryValidation = require("../../validations/grocery.validation");
const groceryController = require("../../controllers/grocery.controller");

const router = express.Router();

router
  .route("/")
  .get(
    validate(groceryValidation.getGroceries),
    groceryController.getGroceries
  );

router
  .route("/:groceryId")
  .get(validate(groceryValidation.getGrocery), groceryController.getGrocery)
  .put(
    validate(groceryValidation.updateGrocery),
    groceryController.updateGrocery
  );

module.exports = router;
