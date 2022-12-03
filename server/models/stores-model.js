const mongoose = require("mongoose");

const Scheme = mongoose.Schema;

const store = new Scheme({
  numOfStores: { type: Number, require: true },
});

module.exports = mongoose.model("store", store);
