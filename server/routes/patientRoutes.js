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
router.post("/", createPatient);

// Get all patients
router.get("/", getPatients);

// Get a patient by ID
router.get("/:id", getPatientById);

// Update a patient
router.put("/:id", updatePatient);

// Delete a patient
router.delete("/:id", deletePatient);

module.exports = router;