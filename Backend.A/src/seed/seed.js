// src/seed/seed.js
const mongoose = require("mongoose");
const User = require("../models/User");
const Medicine = require("../models/Medicine");
const bcrypt = require("bcryptjs");

mongoose.connect("mongodb://localhost:27017/medapp");

(async () => {
  await User.deleteMany();
  await Medicine.deleteMany();

  const user = await User.create({
    name: "Test User",
    email: "test@test.com",
    password: await bcrypt.hash("123456", 10),
  });

  await Medicine.create([
    { name: "Panadol", dosage: "500mg", frequency: "2/day", user: user._id },
    { name: "Aspirin", dosage: "100mg", frequency: "1/day", user: user._id },
  ]);

  console.log("Seed data created");
  process.exit();
})();
