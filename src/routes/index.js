const blogRouter = require("../routes/blog");
const siteRouter = require("../routes/site");
const courseRouter = require("../routes/course");
const adminRouter = require("../routes/admin");

function route(app) {
  app.use("/admin", adminRouter);
  app.use("/blog", blogRouter);
  app.use("/courses", courseRouter);
  app.use("/", siteRouter);
}

module.exports = route;
