const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://Jagjit:Jagjit@cluster0.jhglxf0.mongodb.net/?retryWrites=true",{
      dbName: "User_Registration_DataBase"
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;