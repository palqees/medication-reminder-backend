// src/models/Medicine.js
const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  name: String,
  dosage: String,
  frequency: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Medicine", medicineSchema);
