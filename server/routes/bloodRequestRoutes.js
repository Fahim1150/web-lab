const express = require("express");
const {
  createBloodRequest,
  getBloodRequests,
  getBloodRequestById,
  updateBloodRequest,
  deleteBloodRequest,
} = require("../controllers/bloodRequestController");

const router = express.Router();

router.post("/", createBloodRequest);
router.get("/", getBloodRequests);
router.get("/:id", getBloodRequestById);
router.put("/:id", updateBloodRequest);
router.delete("/:id", deleteBloodRequest);

module.exports = router;
