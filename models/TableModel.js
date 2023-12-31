const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  name: {
    type: String,
    default: () => Date.now().toString(),
  },
  status: {
    type: Number,
    required: true,
  },
  price: {
    type: Schema.Types.Decimal128,
    required: true,
  },
});

module.exports = mongoose.model("tables", tableSchema);
