var express = require("express");
var router = express.Router();
const restaurantController = require("../controllers/restaurantController");

router.get("/", restaurantController.getAll);
router.get("/open", restaurantController.getRestaurantsOpenToday);
router.get("/recommend", restaurantController.recommendMenuItem);

module.exports = router;
