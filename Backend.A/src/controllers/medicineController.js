// src/controllers/medicineController.js
const Medicine = require("../models/Medicine");

exports.addMedicine = async (req, res) => {
  const medicine = await Medicine.create({
    ...req.body,
    user: req.userId,
  });
  res.status(201).json(medicine);
};

exports.getAllMedicines = async (req, res) => {
  const medicines = await Medicine.find({ user: req.userId });
  res.json(medicines);
};

exports.getMedicineById = async (req, res) => {
  const medicine = await Medicine.findById(req.params.id);
  res.json(medicine);
};

exports.updateMedicine = async (req, res) => {
  const medicine = await Medicine.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(medicine);
};

exports.deleteMedicine = async (req, res) => {
  await Medicine.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
