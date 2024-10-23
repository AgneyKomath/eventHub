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

router.get("/events/:id", async (req, res) => {
    try {
        const eventId = req.params.id; // Fetching the ID from the URL params
        if (!eventId) {
            return res.status(400).json({ msg: "Event ID is required" });
        }

        const event = await Event.findById(eventId); // Fetch event by ID
        if (!event) {
            return res.status(404).json({ msg: "Event not found" });
        }

        res.json(event);
    } catch (err) {
        console.error(err.message);
        if (err.kind === "ObjectId") {
            return res.status(400).json({ msg: "Invalid Event ID" });
        }
        res.status(500).send("Server error");
    }
});


module.exports = router; 