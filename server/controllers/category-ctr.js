const categoryModel = require("../models/category-model");

const getCategory = async (req, res) => {
  await categoryModel.find({}).then((data, error) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }
    if (data.length == 0) {
      return res.json({ success: false, message: "no data" });
    }

    res.status(200).json({ success: true, Category: data });
  });
};

const getCategoryById = async (req, res) => {
  await categoryModel
    .findById(req.params.id)
    .then((category) => {
      if (!category) {
        return res.json({ success: false, message: "category not found" });
      }
      return res.status(200).json({ success: true, category });
    })
    .catch((error) =>
      res.status(400).json({ success: false, message: error.message })
    );
};

const addCategory = async (req, res) => {
  await categoryModel
    .insertMany(req.body.category)
    .then(() =>
      res
        .status(300)
        .json({ success: true, massage: "category added successfully" })
    )
    .catch((error) =>
      res.status(400).json({ success: false, message: error.massage })
    );
};

const updateCategory = async (req, res) => {
  await categoryModel
    .findByIdAndUpdate(req.params.id, req.body.category)
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((error) =>
      res.status(400).json({ success: false, message: error.massage })
    );
};

const deleteCategory = async (req, res) => {
  await categoryModel
    .findByIdAndDelete(req.params.id, req.body.category)
    .then(() =>
      res
        .status(300)
        .json({ message: true, message: "Category deleted successfully" })
    )
    .catch((error) =>
      res.status(400).json({ success: false, message: error.massage })
    );
};

module.exports = {
getCategory,
getCategoryById,
addCategory,
updateCategory,
deleteCategory,
};
