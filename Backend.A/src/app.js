// src/app.js
// const express = require("express");

// const authRoutes = require("./routes/authRoutes");
// const medicineRoutes = require("./routes/medicineRoutes");

// const app = express();

// app.use(express.json());


// // Routes
// app.use("/api/auth", authRoutes);

// app.use("/api/medicines", medicineRoutes);


// module.exports = app;
// const cors = require("cors");
// app.use(cors());

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const medicineRoutes = require("./routes/medicineRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/medicines", medicineRoutes);

module.exports = app;
