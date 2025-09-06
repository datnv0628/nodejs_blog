const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authmiddleware");

const adminController = require("../app/controller/AdminController");

router.get("/", authMiddleware, adminController.show);
router.get("/login", adminController.login);
router.get("/create", adminController.create);
router.post("/check", adminController.check);
router.post("/store", adminController.store);
router.get("/:id/edit", adminController.edit);
router.put("/:id", adminController.update);
router.delete("/:id/force", adminController.deleteForce);
router.delete("/:id/delete", adminController.delete);
router.get("/trash", adminController.trash);
router.patch("/:id/restore", adminController.restore);

module.exports = router;
