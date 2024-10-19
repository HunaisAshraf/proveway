const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllers");
const {
  loginValidator,
  signupValitor,
} = require("../middlewares/inputValidator");

router.post("/signup", signupValitor, controller.signupController);
router.post("/login", loginValidator, controller.loginController);

module.exports = router;
