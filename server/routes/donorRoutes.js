const authMiddleware = require("../middleware/authMiddleware");
const express = require("express");

const {
    createDonor,
    getDonors,
    getDonorById,
    updateDonor,
    deleteDonor,
} = require("../controllers/donorController");

const router = express.Router();

router.post("/", authMiddleware, createDonor);
router.get("/", authMiddleware, getDonors);
router.get("/:id", authMiddleware, getDonorById);
router.put("/:id", authMiddleware, updateDonor);
router.delete("/:id", authMiddleware, deleteDonor);

module.exports = router;
