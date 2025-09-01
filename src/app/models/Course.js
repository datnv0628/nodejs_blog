const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");

const CourseSchema = new Schema(
  {
    title: { type: String },
    img: { type: String },
    slug: { type: String, slug: "title", unique: true },
  },
  {
    timestamps: true,
  }
);

const AccountSchema = new Schema({
  account: { type: String },
  password: { type: String },
  gmail: { type: String },
  name: { type: String },
  img: { type: String },
});

const Course = mongoose.model("Course", CourseSchema, "courses");
const Account = mongoose.model("Account", AccountSchema, "account");

module.exports = { Course, Account };
