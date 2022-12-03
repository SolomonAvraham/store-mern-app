const router = require("express").Router();
const {
  getStore,
  getStoreById,
  addStore,
  updateStore,
  deleteStore,
} = require("../controllers/stores-ctr");

router.get("/", getStore);
router.get("/getById/:id", getStoreById);
router.post("/addStore", addStore);
router.put("/updateStore", updateStore);
router.delete("/deleteStore/:id", deleteStore);

module.exports = router;
