require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./DB/index");

const productsRouter = require("./routes/products-router");
const ordersRouter = require("./routes/orders-router");
const usersRouter = require("./routes/users-router");
const sectionRouter = require("./routes/sections-router");
const categoryRouter = require("./routes/category-router");
const infoPageRouter = require("./routes/info-page-router");
const storesRouter = require("./routes/stores-router");

db.on("error", (err) => console.log(err));
const port = 8080;

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/orders", ordersRouter);
app.use("/sections", sectionRouter);
app.use("/category", categoryRouter);
app.use("/infoPage", infoPageRouter);
app.use("/stores", storesRouter);

app.get("/", (req, res) => {
  res.send({ message: "success" });
});

app.listen(port, () => {
  console.log(`Welcome to my service, you on port : ${port}`);
});
