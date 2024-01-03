const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const tableController = require("../controllers/table.controller");
const userController = require("../controllers/user.controller");

const initAPIRoute = (app) => {
  /**
   * @description AUTH ROUTES
   */
  router.post("/login", authController.checkLogin);

  /**
   * @description USER ROUTES
   */
  router.post("/users", userController.addUser);
  router.get("/users", userController.getAllUsers);
  router.get("/users/:id", userController.getUserByID);
  router.put("/users/:id", userController.updateUserByID);
  router.delete("/users/:id", userController.deleteUserByID);

  /**
   * @description TABLE ROUTES
   */
  router.get("/tables", tableController.getAllTables);
  router.get("/tables/:id", tableController.getTableByID);
  router.post("/tables", tableController.addTable);
  router.put("/tables/:id", tableController.updateTableByID);
  router.delete("/tables/:id", tableController.deleteTableByID);

  return app.use("/api/v1", router);
};

module.exports = initAPIRoute;
