const express = require("express");
const router = express.Router();

const controllerCategories = require("../controllers/Controller.Categories");

router.route("/").post(controllerCategories.createCategory);
router.route("/").get(controllerCategories.getCategories);

module.exports = router;
