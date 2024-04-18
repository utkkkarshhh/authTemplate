const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../service/auth");

const registerUser = async (req, res) => {
  const { name, username, email, password, gender, birthday, picture } =
    req.body;
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const newUser = new User({
    name,
    username,
    email,
    password: hashedPassword,
    gender,
    birthday,
    picture,
  });
  try {
    const savedUser = await newUser.save();
    res.redirect("/login");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        const sessionId = uuidv4();
        setUser(sessionId, user);
        res.cookie("uid", sessionId);
        res.redirect("/home");
      } else {
        res.render("login.ejs", {
          message: "Incorrect password",
          errors: ["Incorrect Password"],
        });
      }
    } else {
      res.render("login.ejs", {
        message: "Incorrect username",
        errors: ["Incorrect username"],
      });
    }
  } catch (err) {
    res.status(400).json({ message: err.message, errors: [err.message] });
  }
};

module.exports = { registerUser, loginUser };
