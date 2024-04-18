const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("landing.ejs");
});
router.get("/login", (req, res) => {
  res.render("login.ejs", { errors: [] });
});

router.get("/register", (req, res) => {
  res.render("register.ejs");
});

router.get("/home", (req, res) => {
  if (!req.user) return res.redirect("/login");
  const username = req.user.username;
  return res.render("home.ejs", {
    username: username,
  });
});

module.exports = router;
