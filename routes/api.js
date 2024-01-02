const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");

const initAPIRoute = (app) => {
  /**
   * @description USER ROUTES
   */
  router.post("/login", authController.checkLogin);

  /**
   * @description USER ROUTES
   */
  router.get("/users", userController.getAllUsers);
  router.get("/users/:id", userController.getUserByID);
  router.post("/users", userController.addUser);
  router.put("/users/:id", userController.updateUserByID);
  router.delete("/users/:id", userController.deleteUserByID);

  return app.use("/api/v1", router);
};

module.exports = initAPIRoute;
