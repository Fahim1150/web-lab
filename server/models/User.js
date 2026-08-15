const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        User_ID: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        Name: {
            type: String,
            required: true,
            trim: true,
        },

        Email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        Password: {
            type: String,
            required: true,
        },

        Phone: {
            type: String,
            required: true,
            trim: true,
        },

        Location: {
            type: String,
            required: true,
            trim: true,
        },

        Role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);