const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRoutes");

const app = express();
dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use("views", express.static("public"));
app.use(bodyParser.json());

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to DB: ", err);
  });

PORT = process.env.PORT;

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.render("landing.ejs");
});
app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});
app.get("/home", (req, res) => {
  res.render("home.ejs");
});

app.listen(PORT, () => {
  console.log(`App is live on port ${PORT}`);
});
