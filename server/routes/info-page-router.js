const router = require("express").Router();
const {
  getInfoPage,
  getInfoPageById,
  addInfoPage,
  updateInfoPage,
  deleteInfoPage,
} = require("../controllers/info-page-ctr");

router.get("/", getInfoPage);
router.get("/getById/:id", getInfoPageById);
router.post("/addInfoPage", addInfoPage);
router.put("/updateInfoPage", updateInfoPage);
router.delete("/deleteInfoPage/:id", deleteInfoPage);

module.exports = router;
