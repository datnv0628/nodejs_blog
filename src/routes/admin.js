const express = require("express");
const router = express.Router();

const adminController = require("../app/controller/AdminController");

router.get("/", adminController.show);
router.get("/login", adminController.login);
router.post("/check", adminController.check);

module.exports = router;
