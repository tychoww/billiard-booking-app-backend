const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const FoodController = require("../controllers/food.controller");
const tableController = require("../controllers/table.controller");
const userController = require("../controllers/user.controller");
const bookingController = require("../controllers/booking.controller");

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
  /**
   * @description FOOD ROUTES
   */
  router.get("/foods", FoodController.getAllFoods);
  router.get("/foods/filter", FoodController.filterFoods);
  router.get("/foods/:id", FoodController.getFoodByID);
  router.post("/foods", FoodController.addFood);
  router.put("/foods/:id", FoodController.updateFoodByID);
  router.delete("/foods/:id", FoodController.deleteFoodByID);

  /**
   * @description FOOD ROUTES
   */
  router.get("/bookings", bookingController.getAllBookings);
  router.get("/bookings/:id", bookingController.getBookingByID);
  router.post("/bookings", bookingController.addBooking);
  router.put("/bookings/:id", bookingController.updateBookingByID);
  router.delete("/bookings/:id", bookingController.deleteBookingByID);

  return app.use("/api/v1", router);
};

module.exports = initAPIRoute;
