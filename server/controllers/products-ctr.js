const productModel = require("../models/products-models");

const getProduct = async (req, res) => {
  await productModel.find({}).then((productData, error) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }
    if (productData.length == 0) {
      return res.json({ success: false, message: "no data" });
    }

    res.status(200).json({ success: true, productData });
  });
};

const getProductById = async (req, res) => {
  await productModel
    .findById(req.params.id)
    .then((product) => {
      if (!product) {
        return res.json({ success: false, message: "product not found" });
      }
      return res.status(200).json({ success: true, product });
    })
    .catch((error) =>
      res.status(400).json({ success: false, message: error.message })
    );
};

const addProduct = async (req, res) => {
  await productModel
    .insertMany(req.body.product)
    .then(() =>
      res
        .status(300)
        .json({ success: true, massage: "Product added successfully" })
    )
    .catch((error) =>
      res.status(400).json({ success: false, message: error.massage })
    );
};

const updateProduct = async (req, res) => {
  await productModel
    .findByIdAndUpdate(req.params.id, req.body.product)
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((error) =>
      res.status(400).json({ success: false, message: error.massage })
    );
};

const deleteProduct = async (req, res) => {
  await productModel
    .findByIdAndDelete(req.params.id, req.body.product)
    .then(() =>
      res
        .status(300)
        .json({ message: true, message: "Product deleted successfully" })
    )
    .catch((error) =>
      res.status(400).json({ success: false, message: error.massage })
    );
};

module.exports = {
  getProduct,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
