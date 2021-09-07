const User = require("../models/Model.User");

const controllerAuth = {
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;

      /**
       * @desc
       * check if all input fields are provided
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
       * check if user already exists
       */
      const userDB = await User.findOne({ email });

      if (userDB)
        return res
          .status(400)
          .json({ success: false, msg: "User already exists." });

      /**
       * @desc
       * if everthing is OK save user into DB
       */
      const newUser = await User.create({
        username,
        email,
        password,
      });

      /**
       * @desc
       * generate tokens
       */
      const accessToken = newUser.getAccessToken();
      const refreshToken = newUser.getRefreshToken();

      /**
       * @desc
       * remove password field from user object
       */
      const user = { ...newUser._doc };
      user.password = undefined;

      /**
       * @desc
       * send respons
       */
      return res.status(200).json({
        success: true,
        msg: "User created.",
        user: user,
        accessToken,
        refreshToken,
      });
    } catch (error) {
      return res.status(500).json({ success: false, error });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      /**
       * @desc
       * check if all input fields are provided
       */
      if (!email)
        return res
          .status(400)
          .json({ success: false, msg: "Invalid Credentials." });
      if (!password || password.length < 6)
        return res
          .status(400)
          .json({ success: false, msg: "Invalid Credentials." });

      /**
       * @desc
       * pull user from the DB if exists
       */
      const userDB = await User.findOne({ email }).select("+password");

      if (!userDB)
        return res
          .status(400)
          .json({ success: false, msg: "Invalid Credentials." });

      /**
       * @desc
       * compare passwords
       */
      const isMatch = await userDB.matchPasswords(password);

      //console.log("isMatch:", isMatch);

      if (!isMatch)
        return res
          .status(400)
          .json({ success: false, msg: "Invalid Credentials." });

      /**
       * @desc
       * generate tokens
       */
      const accessToken = userDB.getAccessToken();
      const refreshToken = userDB.getRefreshToken();

      /**
       * @desc
       * remove password field from user object
       */
      const newUser = { ...userDB._doc };
      //newUser.password = undefined;

      /**
       * @desc
       * send response
       */
      return res.status(200).json({
        success: true,
        msg: "Login Success",
        user: newUser,
        accessToken,
        refreshToken,
      });
    } catch (error) {
      return res.status(500).json({ success: false, msg: error.message });
    }
  },
};

module.exports = controllerAuth;
