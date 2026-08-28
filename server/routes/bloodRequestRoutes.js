const authMiddleware = require("../middleware/authMiddleware");
const express = require("express");
const {
  createBloodRequest,
  getBloodRequests,
  getBloodRequestById,
  updateBloodRequest,
  deleteBloodRequest,
} = require("../controllers/bloodRequestController");

const router = express.Router();

router.post("/", authMiddleware, createBloodRequest);
router.get("/", authMiddleware, getBloodRequests);
router.get("/:id", authMiddleware, getBloodRequestById);
router.put("/:id", authMiddleware, updateBloodRequest);
router.delete("/:id", authMiddleware, deleteBloodRequest);

module.exports = router;
