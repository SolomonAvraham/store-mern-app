const router = require("express").Router();
const {
  getUser,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/users-ctr");

router.get("/", getUser);
router.get("/getById/:id", getUserById);
router.post("/addUser", addUser);
router.put("/updateUser", updateUser);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
