const router = require("express").Router();
const {
  getSection,
  getSectionById,
  addSection,
  updateSection,
  deleteSection,
} = require("../controllers/sections-ctr");

router.get("/", getSection);
router.get("/getById/:id", getSectionById);
router.post("/addSection", addSection);
router.put("/updateSection", updateSection);
router.delete("/deleteSection/:id", deleteSection);

module.exports = router;
