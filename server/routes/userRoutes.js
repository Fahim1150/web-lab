const authMiddleware = require("../middleware/authMiddleware");
const express = require("express");

const {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    loginUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/", authMiddleware, createUser);
router.post("/login", authMiddleware, loginUser);

router.get("/", authMiddleware, getUsers);
router.get("/:id", authMiddleware, getUserById);
router.put("/:id", authMiddleware, updateUser);
router.delete("/:id", authMiddleware, deleteUser);

module.exports = router;
