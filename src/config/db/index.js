const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_courses");
    console.log("Connect to Database success!!!");
  } catch (error) {
    console.error("Connect to Database failure!!!");
  }
}

module.exports = { connect };
