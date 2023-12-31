const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  tableID: {
    type: String,
  },
  customerID: {
    type: String,
  },
  datecheckin: {
    type: Date,
    default: Date.now,
  },
  datecheckout: {
    type: Date,
  },
  orderedfood: {
    foodID: {
      type: String,
    },
    quantity: {
      type: Number,
    },
  },
  totalprice: {
    type: Schema.Types.Decimal128,
  },
  status: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("invoice", invoiceSchema);
