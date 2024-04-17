const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: false,
      enum: ["male", "female", "other"],
    },
    birthday: {
      type: Date,
      required: false,
    },
    picture: {
      type: String,
      contentType: String,
      required: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userModel);

module.exports = User;
