const express = require("express");
const router = express.Router();
const CommonController = require("../controllers/common");

router.get("/", CommonController.home);
router.get("/agent/:id/", CommonController.agent);
router.get("/call/:number/", CommonController.call);

module.exports = router;
