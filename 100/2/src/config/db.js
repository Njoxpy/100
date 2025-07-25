const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/day2");
    console.log("Connected to DB!");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(-1);
  }
};

module.exports = connectDB;
