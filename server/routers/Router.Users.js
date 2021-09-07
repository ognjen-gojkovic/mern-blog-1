const express = require("express");
const router = express.Router();

const controllerUser = require("../controllers/Controller.Users");

router.route("/:_id").get(controllerUser.getUser);
router.route("/:_id").put(controllerUser.updateUser);
router.route("/:_id").delete(controllerUser.deleteUser);

module.exports = router;
