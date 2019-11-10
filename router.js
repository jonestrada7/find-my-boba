const express = require("express");
const controller = require("./controller");
const router = express.Router();

router.route("/").get(controller.getHome);
router.route("/findBoba").get(controller.getBobaShop);
router
  .route("/mybobalist")
  .get(controller.getMyBobaList)
  .post(controller.postBoba);
router
  .route("/users")
  .get(controller.getUser)
  .post(controller.createUser)
  .patch(controller.updateUser);

module.exports = router;
