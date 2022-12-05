const storeModel = require("../models/stores-model");

const getStore = async (req, res) => {
  await storeModel.find({}).then((data, error) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }
    if (data.length == 0) {
      return res.json({ success: false, message: "no data" });
    }

    res.status(200).json({ success: true, stores: data });
  });
};

const getStoreById = async (req, res) => {
  await storeModel
    .findById(req.params.id)
    .then((store) => {
      if (!store) {
        return res.json({ success: false, message: "store not found" });
      }
      return res.status(200).json({ success: true, store });
    })
    .catch((error) =>
      res.status(400).json({ success: false, message: error.message })
    );
};

const addStore = async (req, res) => {
  await storeModel
    .insertMany(req.body.store)
    .then(() =>
      res
        .status(300)
        .json({ success: true, massage: "store added successfully" })
    )
    .catch((error) =>
      res.status(400).json({ success: false, message: error.massage })
    );
};

const updateStore = async (req, res) => {
  await storeModel
    .findByIdAndUpdate(req.params.id, req.body.store)
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((error) =>
      res.status(400).json({ success: false, message: error.massage })
    );
};

const deleteStore = async (req, res) => {
  await storeModel
    .findByIdAndDelete(req.params.id, req.body.store)
    .then(() =>
      res
        .status(300)
        .json({ message: true, message: "store deleted successfully" })
    )
    .catch((error) =>
      res.status(400).json({ success: false, message: error.massage })
    );
};

module.exports = {
    getStore,
    getStoreById,
    addStore,
    updateStore,
    deleteStore,
}
