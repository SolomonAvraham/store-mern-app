const mongoose = require("mongoose");

const Scheme = mongoose.Schema;

const order = new Scheme({
  numOfOrder: { type: Number, require: true },
  name: { type: String, require: true },
  address: { type: String, require: true },
  supplyTime: { type: String, require: true },
  numOfProducts: { type: Number, require: true },
  price: { type: Number, require: true },
});

module.exports = mongoose.model("order", order);
