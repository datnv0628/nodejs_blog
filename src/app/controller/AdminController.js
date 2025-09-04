const { Account, Course } = require("../models/Course");
const { multiDataToObject, DataToObject } = require("../../Utils/mongoose");

class AdminController {
  show(req, res) {
    Course.find({}).then((courses) => {
      res.render("admin/main", {
        layout: "dashboard",
        course: multiDataToObject(courses),
      });
    });
  }
  login(req, res) {
    res.render("admin/login", { layout: "login" });
  }
  async check(req, res, next) {
    try {
      const { account, password } = req.body;
      const check = await Account.findOne({ account, password });
      if (check) {
        req.session.user = check;
        res.redirect("/admin");
      } else {
        res.send("not found");
      }
    } catch (error) {
      console.log(error);
    }
  }

  create(req, res) {
    res.render("admin/create", { layout: "dashboard" });
  }

  store(req, res) {
    const formData = req.body;
    if (!formData.path) {
      return res.send("Thiếu path, không tạo được img");
    }
    formData.img = `https://i.ytimg.com/vi/${formData.path.slice(0, 11)}/hqdefault.jpg`;

    const course = new Course(formData);
    course
      .save()
      .then(() => {
        res.redirect("/admin");
      })
      .catch((error) => {
        console.error("Save error:", error);
        res.send("Có lỗi khi lưu course");
      });
  }

  edit(req, res) {
    Course.findById(req.params.id).then((course) =>
      res.render("admin/edit", {
        layout: "dashboard",
        course: DataToObject(course),
      })
    );
  }

  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/admin"))
      .catch(next);
  }
}

module.exports = new AdminController();
