require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/config/db");

connectDB();

app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server is connected successfully");
});
