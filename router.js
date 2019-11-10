const express = require("express");
const searchController = require("./searchController");
const router = express.Router();

router.route("/").get(searchController.getHome);
router.route("/findBoba").get(searchController.getBobaShop);
router
  .route("/mybobalist")
  .get(searchController.getMyBobaList)
  .post(searchController.postBoba);

module.exports = router;
