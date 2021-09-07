const User = require("../models/Model.User");
const Posts = require("../models/Model.Post");

const controllerUser = {
  getUser: async (req, res) => {
    try {
      /**
       * @desc
       * check if user exists, if not return 404
       */

      const user = await User.findById(req.params);

      if (!user)
        return res.status(404).json({ success: false, msg: "User not Found!" });

      /**
       * @desc
       * password is handled inside model with 'select' property, so it's not included
       * in document we get from DB, if we explicitly don't state it
       * but in other case we would need to delete it manually like:
       * const newUser = {...user}
       * newUser.password = undefine;
       * res.json({user: newUser})
       */

      return res.status(200).json({ success: true, user });
    } catch (error) {
      return res.status(404).json({ success: false, msg: "User not Found!" });
    }
  },
  updateUser: async (req, res) => {
    if (req.body.userId === req.params._id) {
      try {
        const { username, email, password } = req.body;

        /**
         * @desc
         * check for input data
         */
        if (!username)
          return res
            .status(400)
            .json({ success: false, msg: "Invalid Credentials." });
        if (!email)
          return res
            .status(400)
            .json({ success: false, msg: "Invalid Credentials." });
        if (!password)
          return res
            .status(400)
            .json({ success: false, msg: "Invalid Credentials." });

        /**
         * @desc
         * check if user exists
         */
        const user = await User.findOne({ _id: req.params._id });
        if (!user)
          return res
            .status(400)
            .json({ success: false, msg: "User doesn't exists." });

        /**
         * @desc
         * update and save user into DB
         */

        user.username = username;
        user.password = password;
        user.email = email;

        await user.save();

        const newUser = { ...user._doc };
        newUser.password = undefined;

        console.log("user from update:", user);
        return res
          .status(200)
          .json({ success: true, msg: "User Updated.", user: newUser });
      } catch (error) {
        return res.status(500).json({ success: false, msg: error.message });
      }
    }
  },
  deleteUser: async (req, res) => {
    if (req.params._id) {
      try {
        const user = await User.findOne({ _id: req.params._id });

        try {
          /**
           * @desc
           * if user exists and there are posts on current user delete them all.
           */
          if (user) await Posts.deleteMany({ username: user.username });

          /**
           * @desc
           * deleteuser
           */
          await User.findByIdAndDelete({ _id: req.params._id });

          return res.status(200).json({ success: true, msg: "User Deleted." });
        } catch (error) {
          return res.status(404).json({ success: false, msg: error.message });
        }
      } catch (error) {
        return res.status(404).json({ success: false, msg: "User not Found!" });
      }
    }
  },
};

module.exports = controllerUser;
