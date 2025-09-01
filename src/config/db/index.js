const mongoose = require("mongoose");

const url =
  "mongodb+srv://abc:123@cluster0.tsiqpvj.mongodb.net/f8_courses?retryWrites=true&w=majority&appName=Cluster0";

async function connect() {
  try {
    await mongoose.connect(url);
    console.log("Connect to Database success!!!");
  } catch (error) {
    console.error("Connect to Database failure!!!");
  }
}

module.exports = { connect };
