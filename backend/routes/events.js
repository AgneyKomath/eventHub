const express = require("express");
const router = express.Router();
const Event = require("../models/Event"); // Assuming Event is the model name

router.get("/events", async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

router.get("/events/trending", async (req, res) => {
    try {
        const trendingEvents = await Event.find().sort({ bookings: -1 }).limit(3);
        res.json(trendingEvents);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

module.exports = router; 