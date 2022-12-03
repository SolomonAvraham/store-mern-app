const router = require("express").Router();
const {
  getCategory,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category-ctr");

router.get("/", getCategory);
router.get("/getById/:id", getCategoryById);
router.post("/addCategory", addCategory);
router.put("/updateCategory", updateCategory);
router.delete("/deleteCategory/:id", deleteCategory);

module.exports = router;
