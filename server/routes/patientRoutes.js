const authMiddleware = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const express = require("express");

const {
  createPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} = require("../controllers/patientController");

const router = express.Router();

// Create a patient
router.post("/", authMiddleware, createPatient);

// Get all patients
router.get("/", authMiddleware, getPatients);

// Get a patient by ID
router.get("/:id", authMiddleware, getPatientById);

// Update a patient
router.put("/:id", authMiddleware, updatePatient);

// Delete a patient - ADMIN only
router.delete(
  "/:id",
  authMiddleware,
  authorizeRoles("ADMIN"),
  deletePatient
);

module.exports = router;