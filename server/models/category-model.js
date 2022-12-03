const mongoose = require("mongoose");

const Scheme = mongoose.Schema;

const category = new Scheme({
  numOfCategory: { type: Number, require: true },

});

module.exports = mongoose.model("category", category);
