const router = require("express").Router();
const {
  getOrder,
  getOrderById,
  addOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/orders-ctr");

router.get("/", getOrder);
router.get("/getById/:id", getOrderById);
router.post("/addOrder", addOrder);
router.put("/updateOrder", updateOrder);
router.delete("/deleteOrder/:id", deleteOrder);

module.exports = router;
