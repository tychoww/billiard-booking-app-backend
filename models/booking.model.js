const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  arrivaltime: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("bookings", bookingSchema);
