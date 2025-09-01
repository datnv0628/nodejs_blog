class BlogController {
  index(req, res) {
    res.render("blog");
  }
  show(req, res) {
    res.send("Blog detail");
  }
}

module.exports = new BlogController();
