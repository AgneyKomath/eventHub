const express = require("express");
const Booking = require("../models/Booking");
const Event = require("../models/Event");
const router = express.Router();

router.post("/", async (req, res) => {
    const { userId, eventId } = req.body;

    try {
        const booking = new Booking({ userId, eventId });
        await booking.save();

        await Event.findByIdAndUpdate(eventId, { $inc: { bookings: 1 } });

        res.status(201).json({ message: "Booking successful", booking });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

router.get("/:userId/:eventId", async (req, res) => {
    const { userId, eventId } = req.params;

    try {
        const booking = await Booking.findOne({ userId, eventId });

        if (booking) {
            return res.status(200).json(booking); 
        } else {
            return res.status(404).json(null); 
        }
    } catch (error) {
        console.error("Error checking booking:", error);
        return res.status(500).json({ message: "Error checking booking" });
    }
});

module.exports = router;
