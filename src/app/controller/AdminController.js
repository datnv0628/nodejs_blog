const { Account } = require("../models/Course");

class AdminController {
  show(req, res) {
    res.render("admin/main", { layout: "dashboard" });
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
}

module.exports = new AdminController();
