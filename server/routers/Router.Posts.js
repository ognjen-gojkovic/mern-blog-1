const express = require("express");
const router = express.Router();

const controllerPosts = require("../controllers/Controller.Posts");

router.route("/").post(controllerPosts.createPost);
router.route("/").get(controllerPosts.getAllPost);
router.route("/:_id").get(controllerPosts.getPost);
router.route("/:_id").patch(controllerPosts.updatePost);
router.route("/:_id").delete(controllerPosts.deletePost);

module.exports = router;
