const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");
const {
  loginValidator,
  signupValitor,
} = require("../middlewares/inputValidator");
const { authentication } = require("../middlewares/authenticate");
const taskController = require("../controllers/taskController");
const categoryController = require("../controllers/categoryController");

router.post("/signup", signupValitor, userController.signupController);
router.post("/login", loginValidator, userController.loginController);
router.get("/refreshtoken", userController.verifyRefershToken);

router.get("/tasks", authentication, taskController.getTaskController);
router.post("/tasks", authentication, taskController.addTaskController);
router.put("/tasks/:id", authentication, taskController.updateTaskController);
router.delete(
  "/tasks/:id",
  authentication,
  taskController.deleteTaskController
);

router.get(
  "/categories",
  authentication,
  categoryController.getCategoryController
);
router.post(
  "/categories",
  authentication,
  categoryController.addCategoryControlelr
);
router.delete(
  "/categories/:id",
  authentication,
  categoryController.deleteCategoryController
);

module.exports = router;
