const express = require("express");
const router = express.Router();

const blogController = require("../app/controller/BlogController");

router.get("/detail", blogController.show);
router.get("/", blogController.index);

module.exports = router;
