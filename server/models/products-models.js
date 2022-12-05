const mongoose = require("mongoose");

const Scheme = mongoose.Schema;

const product = new Scheme({
  numOfProd: { type: Number, require: true },
});

module.exports = mongoose.model("product", product);
