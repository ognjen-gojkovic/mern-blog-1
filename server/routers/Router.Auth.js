const express = require("express");
const router = express.Router();

const controllerAuth = require("../controllers/Controller.Auth");

router.route("/register").post(controllerAuth.register);
router.route("/login").post(controllerAuth.login);

module.exports = router;
