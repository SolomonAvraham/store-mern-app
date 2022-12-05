const mongoose = require("mongoose");

const Scheme = mongoose.Schema;

const section = new Scheme({
  numOfSection: { type: Number, require: true }
});

module.exports = mongoose.model("section", section);
