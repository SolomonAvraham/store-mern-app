const infoPageModel = require("../models/info-page-model");

const getInfoPage = async (req, res) => {
  await infoPageModel.find({}).then((data, error) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }
    if (data.length == 0) {
      return res.json({ success: false, message: "no data" });
    }

    res.status(200).json({ success: true, InfoPage: data });
  });
};

const getInfoPageById = async (req, res) => {
  await infoPageModel
    .findById(req.params.id)
    .then((infoPage) => {
      if (!infoPage) {
        return res.json({ success: false, message: "infoPage not found" });
      }
      return res.status(200).json({ success: true, infoPage });
    })
    .catch((error) =>
      res.status(400).json({ success: false, message: error.message })
    );
};

const addInfoPage = async (req, res) => {
  await infoPageModel
    .insertMany(req.body.infoPage)
    .then(() =>
      res
        .status(300)
        .json({ success: true, massage: "infoPage added successfully" })
    )
    .catch((error) =>
      res.status(400).json({ success: false, message: error.massage })
    );
};

const updateInfoPage = async (req, res) => {
  await infoPageModel
    .findByIdAndUpdate(req.params.id, req.body.infoPage)
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((error) =>
      res.status(400).json({ success: false, message: error.massage })
    );
};

const deleteInfoPage = async (req, res) => {
  await infoPageModel
    .findByIdAndDelete(req.params.id, req.body.infoPage)
    .then(() =>
      res
        .status(300)
        .json({ message: true, message: "InfoPage deleted successfully" })
    )
    .catch((error) =>
      res.status(400).json({ success: false, message: error.massage })
    );
};

module.exports = {
  getInfoPage,
  getInfoPageById,
  addInfoPage,
  updateInfoPage,
  deleteInfoPage,
};
