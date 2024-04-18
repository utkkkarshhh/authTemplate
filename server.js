const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const connectDB = require("./databaseConnection");
const userRouter = require("./routes/userRoutes");
const mainRouter = require("./routes/mainRouter");
const { checkAuth } = require("./middlewares/auth");

// Middlewares
dotenv.config();
const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("views", express.static("public"));
app.use(bodyParser.json());

// DB
connectDB(process.env.DB_URL);

// Routes
app.use("/user", userRouter);
app.use(checkAuth, mainRouter);

//Listen to port
app.listen(process.env.PORT, () => {
  console.log(`App is live on port ${process.env.PORT}`);
});
