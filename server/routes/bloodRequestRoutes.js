const express = require("express");

const authenticateToken = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

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

module.exports = router;
