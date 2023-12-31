const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    default: Date.now().toString(),
  },
  price: {
    type: Schema.Types.Decimal128,
    required: true,
  },
});

module.exports = mongoose.model("food", foodSchema);
