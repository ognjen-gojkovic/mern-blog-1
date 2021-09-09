const router = require("express").Router();
const multer = require("multer");

/**
 * multer
 * for image upload
 */

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router
  .route("/")
  .post(upload.single("file"), (req, res) =>
    res.status(200).json({ success: true, msg: "Image Uploaded!" })
  );

module.exports = router;
