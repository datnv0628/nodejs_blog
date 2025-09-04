const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slugify = require("slugify");

const CourseSchema = new Schema(
  {
    title: { type: String },
    path: { type: String },
    img: { type: String },
    level: { type: String },
    slug: { type: String, slug: "title", unique: true },
  },
  {
    timestamps: true,
  }
);
CourseSchema.pre("save", function (next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});
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
