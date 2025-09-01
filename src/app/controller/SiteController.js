const { Course } = require("../models/Course");
const { multiDataToObject } = require("../../Utils/mongoose");

class SiteController {
  index(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render("home", {
          layout: "main",
          courses: multiDataToObject(courses),
        })
      )
      .catch(next);
  }
}

module.exports = new SiteController();
