require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./DB/index");

db.on("error", (err) => console.log(err));
const port = 8080;

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({ message: "success" });
});

app.listen(port, () => {
  console.log(`Welcome to my service, you on port : ${port}`);
});