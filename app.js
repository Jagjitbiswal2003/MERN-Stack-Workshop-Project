const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const route = require("./routes/userRoutes.js");

const app = express();

// database connect
connectDB();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/users", route);

// error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message,
  });
});

module.exports = app;
