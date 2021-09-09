require("dotenv").config();
const express = require("express");
const connectDB = require("./config/ConnectDB");
const cors = require("cors");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.route("/").get((req, res) => {
  return res.status(200).json({ success: true, msg: "Init response..." });
});

app.use("/api/auth", require("./routers/Router.Auth"));
app.use("/api/users", require("./routers/Router.Users"));
app.use("/api/posts", require("./routers/Router.Posts"));
app.use("/api/categories", require("./routers/Router.Categories"));
app.use("/api/upload", require("./routers/Router.Upload"));

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  if (err) console.log(err);
  server.close(() => process.exit(1));
});
