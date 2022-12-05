const mongoose = require("mongoose");

const Scheme = mongoose.Schema;

const user = new Scheme({
  fullName: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
});

module.exports = mongoose.model("user", user);
