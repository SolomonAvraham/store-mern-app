const orderModel = require("../models/orders-models");

const getOrder = async (req, res) => {
  await orderModel.find({}).then((orderData, error) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }
    if (orderData.length == 0) {
      return res.json({ success: false, message: "no data" });
    }

    res.status(200).json({ success: true, orders: orderData });
  });
};

const getOrderById = async (req, res) => {
  await orderModel
    .findById(req.params.id)
    .then((order) => {
      if (!order) {
        return res.json({ success: false, message: "order not found" });
      }
      return res.status(200).json({ success: true, order });
    })
    .catch((error) =>
      res.status(400).json({ success: false, message: error.message })
    );
};

const addOrder = async (req, res) => {
  await orderModel
    .insertMany(req.body.order)
    .then(() =>
      res
        .status(300)
        .json({ success: true, massage: "order added successfully" })
    )
    .catch((error) =>
      res.status(400).json({ success: false, message: error.massage })
    );
};

const updateOrder = async (req, res) => {
  await orderModel
    .findByIdAndUpdate(req.params.id, req.body.order)
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((error) =>
      res.status(400).json({ success: false, message: error.massage })
    );
};

const deleteOrder = async (req, res) => {
  await orderModel
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
 getOrder,
getOrderById,
 addOrder,
updateOrder,
 deleteOrder,
};
