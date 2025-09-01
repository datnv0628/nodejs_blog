const { Course } = require("../models/Course");
const { DataToObject } = require("../../Utils/mongoose");

class CourseController {
  show(req, res) {
    Course.findOne({ slug: req.params.slug }).then((course) =>
      res.render("courses/show", {
        course: DataToObject(course),
      })
    );
  }
}

module.exports = new CourseController();
