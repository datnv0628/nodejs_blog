const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authmiddleware");

const adminController = require("../app/controller/AdminController");

router.get("/", authMiddleware, adminController.show);
router.get("/login", adminController.login);
router.post("/check", adminController.check);

module.exports = router;
