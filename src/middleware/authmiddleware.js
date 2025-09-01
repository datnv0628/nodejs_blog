function authMiddleware(req, res, next) {
  if (req.session && req.session.user) {
    // Nếu có session => đã đăng nhập
    return next();
  }
  // Nếu chưa đăng nhập => redirect về login
  res.redirect("/admin/login");
}

module.exports = authMiddleware;
