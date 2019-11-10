const express = require("express");
const controller = require("./searchController");
const router = express.Router();

// Search Boba
router.route("/").get(controller.getHome);
router.route("/findBoba").get(controller.getBobaShop);
router
    .route("/mybobalist")
    .get(controller.getMyBobaList)
    .post(controller.postBoba);

// Users
router.route("/users").post(controller.createUser);
router
    .route("/users/:id")
    .get(controller.getUser)
    .patch(controller.updateUser);

module.exports = router;