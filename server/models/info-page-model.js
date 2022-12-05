const mongoose = require("mongoose");

const Scheme = mongoose.Schema;

const infoPage = new Scheme({
  numOfInfoPage: { type: Number, require: true },

});

module.exports = mongoose.model("infoPage", infoPage);
