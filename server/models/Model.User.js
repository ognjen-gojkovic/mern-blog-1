const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Please provide email."],
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
      trim: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
      minlength: 6,
    },
    profilePic: {
      type: String,
      default: "",
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpire: {
      type: Date,
    },
  },
  { timestamps: true }
);

/**
 * @desc
 * hash password before it gets saved into database
 */
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();

  const salt = await bcrypt.genSalt(15);
  this.password = await bcrypt.hash(this.password, salt);
});

/**
 * @desc
 * on login check if user provided correct password
 */
UserSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

/**
 * @desc
 * on login/register if everthing is ok generate
 * and send access and refresh tokens to frontend via usual response,
 * on frontend tokens will be handled with local and session storage
 */
UserSchema.methods.getAccessToken = function () {
  return jwt.sign(
    { id: this._id, user: this.username },
    process.env.JWT_ACCESS_SECRET,
    {
      expiresIn: process.env.JWT_ACCESS_EXPIRE,
    }
  );
};

UserSchema.methods.getRefreshToken = function () {
  return jwt.sign(
    { id: this._id, user: this.username },
    process.env.JWT_REFRESH_SECRET,
    {
      expiresIn: process.env.JWT_REFRESH_EXPIRE,
    }
  );
};

/**
 * @desc
 * for handling forget password, not fully developed yet
 */
UserSchema.methods.resetPaswordToken = function () {
  const resetSecret = crypto.randomBytes(20).toString("latin1");

  //hash token and save it to DB
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetSecret)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 1000 * 60 * 10;
};

module.exports = mongoose.model("User", UserSchema);
