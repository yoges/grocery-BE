const express = require("express");
const groceryRoute = require("./grocery.route");
const router = express.Router();

const defaultRoutes = [
  {
    path: "/groceries",
    route: groceryRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
