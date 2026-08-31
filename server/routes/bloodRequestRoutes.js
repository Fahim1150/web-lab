const authenticateToken = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
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

router.post("/", authenticateToken, createBloodRequest);

router.get("/", authenticateToken, getBloodRequests);

router.get("/:id", authenticateToken, getBloodRequestById);

router.put(
  "/:id",
  authenticateToken,
  authorizeRoles("ADMIN"),
  updateBloodRequest
);

router.delete(
  "/:id",
  authenticateToken,
  authorizeRoles("ADMIN"),
  deleteBloodRequest
);
router.post("/", authMiddleware, createBloodRequest);
router.get("/", authMiddleware, getBloodRequests);
router.get("/:id", authMiddleware, getBloodRequestById);
router.put("/:id", authMiddleware, updateBloodRequest);
router.delete("/:id", authMiddleware, deleteBloodRequest);

module.exports = router;
