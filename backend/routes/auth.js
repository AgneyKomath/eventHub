const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

const JWT_SECRET = "your_secret_key";

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

        const payload = { user: { id: user.id } };

        jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" }, (err, token) => {
            if (err) throw err;
            res.json({
                token,
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                },
            });
        });
    } catch (err) {
        console.error("Server error during login:", err.message);
        res.status(500).send("Server error");
    }
});



module.exports = router;
