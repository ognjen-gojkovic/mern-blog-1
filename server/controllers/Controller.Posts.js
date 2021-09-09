const Posts = require("../models/Model.Post");

const controllerUser = {
  createPost: async (req, res) => {
    try {
      const { title, desc, photo, username, categories } = req.body;

      /**
       * @desc
       * check if inputs are provided
       */
      if (!title)
        return res
          .status(400)
          .json({ success: false, msg: "Provide input to all fields." });
      if (!desc)
        return res
          .status(400)
          .json({ success: false, msg: "Provide input to all fields." });
      if (!photo)
        return res
          .status(400)
          .json({ success: false, msg: "Provide input to all fields." });
      if (!username)
        return res
          .status(400)
          .json({ success: false, msg: "Provide input to all fields." });
      if (!categories)
        return res
          .status(400)
          .json({ success: false, msg: "Provide input to all fields." });

      /**
       * @desc
       * create post and send response
       */
      const newPost = await Posts.create({
        title,
        desc,
        photo,
        username,
        categories,
      });

      return res.status(200).json({ success: true, newPost });
    } catch (error) {
      return res.status(500).json({ success: false, msg: error.message });
    }
  },
  getPost: async (req, res) => {
    try {
      /**
       * @desc
       * check if post _id is provided
       */
      if (!req.params._id)
        return res.status(400).json({ success: false, msg: "Invalid post." });

      /**
       * @desc
       * find post and send response
       */
      const post = await Posts.findById({
        _id: req.params._id,
      });

      return res.status(200).json({ success: true, msg: "Success!", post });
    } catch (error) {
      return res.status(500).json({ success: false, msg: error });
    }
  },
  getAllPost: async (req, res) => {
    try {
      const username = req.query.user;
      const category = req.query.cat;

      /**
       * @desc
       * depending on search query retrive posts from DB and return them
       */
      let posts;

      if (username) {
        posts = await Posts.find({ username });
      } else if (category) {
        posts = await Posts.find({ categories: { $in: [category] } });
      } else {
        posts = await Posts.find();
      }

      return res.status(200).json({ success: true, msg: "Success!", posts });
    } catch (error) {
      return res.status(500).json({ success: false, msg: error.message });
    }
  },
  updatePost: async (req, res) => {
    try {
      const { title, desc, photo, categories, username } = req.body;

      /**
       * @desc
       * check if params are provided
       */
      if (!req.params._id)
        return res.status(400).json({ success: false, msg: "Invalid post." });

      /**
       * @desc
       * check if all inputs are provided
       */
      if (!title)
        return res
          .status(400)
          .json({ success: false, msg: "Provide input to all fields!" });
      if (!desc)
        return res
          .status(400)
          .json({ success: false, msg: "Provide input to all fields!" });
      if (!desc)
        return res
          .status(400)
          .json({ success: false, msg: "Provide input to all fields!" });
      if (!desc)
        return res
          .status(400)
          .json({ success: false, msg: "Provide input to all fields!" });
      if (!username)
        return res
          .status(400)
          .json({ success: false, msg: "Provide input to all fields!" });

      const oldPost = await Posts.findById({ _id: req.params._id });

      /**
       * @desc
       * if invalid _id return response error
       */
      if (!oldPost)
        return res
          .status(404)
          .json({ success: false, msg: "Invalid information!" });

      /**
       * @desc
       * if invalid username is provided return response error
       */
      if (oldPost.username !== username)
        return res
          .status(401)
          .json({ success: false, msg: "You can only update your own posts!" });

      /**
       * @desc
       * when we retrive doc from DB, property doc._doc is our real doc as plain vanilla js object
       * so we can manipulate it like any other object
       * and when we finish just use .save() method on new modified document
       */
      /*
      console.log("old Post:", oldPost);
      const newPost = {...oldPost}
      newPost._doc.title = title;
      newPost._doc.desc = desc;
      newPost._doc.photo = photo;
      newPost._doc.categories = categories;
      await newPost.save();
      console.log("new Post:", newPost);
      */

      /**
       * @desc
       * find post, update it and return response
       */
      const updatedPost = await Posts.findByIdAndUpdate(
        { _id: req.params._id },
        { $set: { username, desc, photo, categories } },
        { new: true }
      );

      return res.status(200).json({ success: true, updatedPost });
    } catch (error) {
      return res.status(500).json({ success: false, msg: error.message });
    }
  },
  deletePost: async (req, res) => {
    try {
      /**
       * @desc
       * check if post _id is provided
       */

      if (!req.params._id)
        return res.status(400).json({ success: false, msg: "Invalid post." });

      /**
       * @desc
       * delete post and return response
       */
      const deletedPost = await Posts.findByIdAndDelete({
        _id: req.params._id,
      });

      return res
        .status(200)
        .json({ success: true, msg: "Post Deleted!", post: deletedPost });
    } catch (error) {
      return res.status(500).json({ success: false, msg: error.message });
    }
  },
};

module.exports = controllerUser;
