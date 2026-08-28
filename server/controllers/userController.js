const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Create User
const createUser = async (req, res) => {
    try {
        const { Password } = req.body;

        const hashedPassword = await bcrypt.hash(Password, 10);

        const user = await User.create({
            ...req.body,
            Password: hashedPassword,
        });

        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

// Get All Users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// Get User By ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// Update User
const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

// Delete User
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        res.status(200).json({
            message: "User deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
};
