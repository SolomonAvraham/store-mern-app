const sectionModel = require("../models/sections-model");

const getSection = async (req, res) => {
  await sectionModel.find({}).then((data, error) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }
    if (data.length == 0) {
      return res.json({ success: false, message: "no data" });
    }

    res.status(200).json({ success: true, section: data });
  });
};

const getSectionById = async (req, res) => {
  await sectionModel
    .findById(req.params.id)
    .then((section) => {
      if (!section) {
        return res.json({ success: false, message: "section not found" });
      }
      return res.status(200).json({ success: true, section });
    })
    .catch((error) =>
      res.status(400).json({ success: false, message: error.message })
    );
};

const addSection = async (req, res) => {
  await sectionModel
    .insertMany(req.body.section)
    .then(() =>
      res
        .status(300)
        .json({ success: true, massage: "section added successfully" })
    )
    .catch((error) =>
      res.status(400).json({ success: false, message: error.massage })
    );
};

const updateSection = async (req, res) => {
  await sectionModel
    .findByIdAndUpdate(req.params.id, req.body.section)
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((error) =>
      res.status(400).json({ success: false, message: error.massage })
    );
};

const deleteSection = async (req, res) => {
  await sectionModel
    .findByIdAndDelete(req.params.id, req.body.section)
    .then(() =>
      res
        .status(300)
        .json({ message: true, message: "section deleted successfully" })
    )
    .catch((error) =>
      res.status(400).json({ success: false, message: error.massage })
    );
};

module.exports = {
  getSection,
  getSectionById,
  addSection,
  updateSection,
  deleteSection,
};
