const Donor = require("../models/Donor");

// CREATE
const createDonor = async (req, res) => {
    try {
        const donor = await Donor.create(req.body);
        res.status(201).json(donor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// READ ALL
const getDonors = async (req, res) => {
    try {
        const donors = await Donor.find().sort({ createdAt: -1 });
        res.status(200).json(donors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// READ BY ID
const getDonorById = async (req, res) => {
    try {
        const donor = await Donor.findById(req.params.id);

        if (!donor) {
            return res.status(404).json({ message: "Donor not found" });
        }

        res.status(200).json(donor);
    } catch (error) {
        res.status(400).json({ message: "Invalid donor ID" });
    }
};

// UPDATE
const updateDonor = async (req, res) => {
    try {
        const donor = await Donor.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!donor) {
            return res.status(404).json({ message: "Donor not found" });
        }

        res.status(200).json(donor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE
const deleteDonor = async (req, res) => {
    try {
        const donor = await Donor.findByIdAndDelete(req.params.id);

        if (!donor) {
            return res.status(404).json({ message: "Donor not found" });
        }

        res.status(200).json({
            message: "Donor deleted successfully"
        });
    } catch (error) {
        res.status(400).json({ message: "Invalid donor ID" });
    }
};

module.exports = {
    createDonor,
    getDonors,
    getDonorById,
    updateDonor,
    deleteDonor,
};