// src/routes/medicineRoutes.js
const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const controller = require("../controllers/medicineController");

router.use(auth);
router.post("/", controller.addMedicine);
router.get("/", controller.getAllMedicines);
router.get("/:id", controller.getMedicineById);
router.put("/:id", controller.updateMedicine);
router.delete("/:id", controller.deleteMedicine);
// const auth = require('../middleware/authMiddleware');

// router.post('/', auth, addMedicine);


module.exports = router;
