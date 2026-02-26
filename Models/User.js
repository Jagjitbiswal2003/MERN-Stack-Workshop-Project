const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [3, "Name must be at least 3 characters"],
    maxlength: [50, "Name cannot exceed 50 characters"],
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
  },

  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [1, "Age must be greater than 0"],
    max: [90, "Age cannot exceed 90"],
    validate: {
      validator: Number.isInteger,
      message: "Age must be an integer",
    },
  },


  gender: {
    type: String,
    trim: true,
    enum: ["male", "female", "other"],
    default: "other",
  },

  address: {
    type: String,
    trim: true,
    maxlength: [200, "Address too long"],
  },
});

module.exports = mongoose.model("User", userSchema);
