const router = require("express").Router();
const {
  getProduct,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products-ctr");

router.get("/", getProduct);
router.get("/getById/:id", getProductById);
router.post("/addProduct", addProduct);
router.put("/updateProduct", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);

module.exports = router;
