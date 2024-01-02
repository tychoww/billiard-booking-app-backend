const mongoose = require("mongoose");
const TableModel = require("./TableModel");
const FoodModel = require("./foodModel");
const UserModel = require("./UserModel");

const invoiceSchema = new mongoose.Schema({
  tableID: {
    type: Schema.Types.ObjectId,
    ref: TableModel.modelName,
  },
  customerID: {
    type: Schema.Types.ObjectId,
    ref: UserModel.modelName,
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
      type: Schema.Types.ObjectId,
      ref: FoodModel.modelName,
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

module.exports = mongoose.model("invoices", invoiceSchema);
