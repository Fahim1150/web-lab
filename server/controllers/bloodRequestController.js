const BloodRequest = require("../models/BloodRequest");

// CREATE
const createBloodRequest = async (req, res) => {
  try {
    const bloodRequest = await BloodRequest.create(req.body);
    res.status(201).json(bloodRequest);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// READ ALL
const getBloodRequests = async (req, res) => {
  try {
    const requests = await BloodRequest.find().sort({ createdAt: -1 });
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ BY ID
const getBloodRequestById = async (req, res) => {
  try {
    const request = await BloodRequest.findById(req.params.id);

    if (!request) {
      return res.status(404).json({ message: "Blood request not found" });
    }

    res.status(200).json(request);
  } catch (error) {
    res.status(400).json({ message: "Invalid blood request ID" });
  }
};

// UPDATE
const updateBloodRequest = async (req, res) => {
  try {
    const request = await BloodRequest.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!request) {
      return res.status(404).json({ message: "Blood request not found" });
    }

    res.status(200).json(request);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE
const deleteBloodRequest = async (req, res) => {
  try {
    const request = await BloodRequest.findByIdAndDelete(req.params.id);

    if (!request) {
      return res.status(404).json({ message: "Blood request not found" });
    }

    res.status(200).json({ message: "Blood request deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Invalid blood request ID" });
  }
};

module.exports = {
  createBloodRequest,
  getBloodRequests,
  getBloodRequestById,
  updateBloodRequest,
  deleteBloodRequest,
};
