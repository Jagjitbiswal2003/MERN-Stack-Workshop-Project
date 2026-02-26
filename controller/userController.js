const User = require("../Models/User.js");

// Register User
exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, age, gender, address } = req.body;

    if (!name || !email || !age || !gender || !address ) {
      return res.status(400).json({
        success: false,
        message: "All fields required"
      });
    }

    const user = await User.create({ name, email, age,gender, address });

    res.status(201).json({
      success: true,
      message: "User Registered",
      data: user
    });
  } catch (error) {
    next(error);
  }
};