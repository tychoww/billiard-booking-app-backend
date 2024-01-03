const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
  pricePerHour: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("tables", tableSchema);
