const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { name, username, email, password, gender, birthday, picture } =
    req.body;
  console.log(req.body.name);
  const newUser = new User({
    name,
    username,
    email,
    password,
    gender,
    birthday,
    picture,
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user) {
      if (user.password === password) {
        res.status(200).json(user);
      } else {
        res.status(400).json({ message: "Incorrect password" });
      }
    } else {
      res.status(400).json({ message: "Incorrect username" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { registerUser, loginUser };
