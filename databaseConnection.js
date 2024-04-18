const mongoose = require("mongoose");

const connectDB = async (db_url) => {
  try {
    mongoose.connect(db_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (e) {
    console.log("Error connecting to DB: ", err);
  }
};

module.exports = connectDB;
