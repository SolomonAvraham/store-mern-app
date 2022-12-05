const userModel = require("../models/users-models");

const getUser = async (req, res) => {
  await userModel.find({}).then((user, error) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }
    if (user.length == 0) {
      return res.json({ success: false, message: "no data" });
    }

    res.status(200).json({ success: true, user });
  });
};

const getUserById = async (req, res) => {
  await userModel
    .findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.json({ success: false, message: "user not found" });
      }
      return res.status(200).json({ success: true, user });
    })
    .catch((error) =>
      res.status(400).json({ success: false, message: error.message })
    );
};

const addUser = async (req, res) => {
  await userModel
    .insertMany(req.body.user)
    .then(() =>
      res
        .status(300)
        .json({ success: true, massage: "user added successfully" })
    )
    .catch((error) =>
      res.status(400).json({ success: false, message: error.massage })
    );
};

const updateUser = async (req, res) => {
  await userModel
    .findByIdAndUpdate(req.params.id, req.body.user)
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((error) =>
      res.status(400).json({ success: false, message: error.massage })
    );
};

const deleteUser = async (req, res) => {
  await userModel
    .findByIdAndDelete(req.params.id, req.body.order)
    .then(() =>
      res
        .status(300)
        .json({ message: true, message: "Order deleted successfully" })
    )
    .catch((error) =>
      res.status(400).json({ success: false, message: error.massage })
    );
};

module.exports = {
  getUser,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
