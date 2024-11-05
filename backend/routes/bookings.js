const express = require("express");
const Booking = require("../models/Booking");
const Event = require("../models/Event");
const User = require("../models/User");
const nodemailer = require("nodemailer");
const router = express.Router();

const sendBookingEmail = (userEmail, eventDetails) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user:"USERNAME",
            pass: "PASSWORD",
        },
    });

    const mailOptions = {
        from: "appeventx@gmail.com",
        to: userEmail,
        subject: "Event Booking Confirmation",
        text: `You have successfully booked the event: ${eventDetails.title}. \nDate: ${eventDetails.date} \nLocation: ${eventDetails.location}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error sending email:", error);
        } else {
            console.log("Email sent:", info.response);
        }
    });
};

router.post("/", async (req, res) => {
    const { userId, eventId } = req.body;

    try {
        const event = await Event.findById(eventId);
        const user = await User.findById(userId);

        if (!event || !user) {
            return res.status(404).json({ msg: "Event or user not found" });
        }

        const booking = new Booking({ userId, eventId });
        await booking.save();

        await Event.findByIdAndUpdate(eventId, { $inc: { bookings: 1 } });

        res.status(201).json({ message: "Booking successful", booking });

        sendBookingEmail(user.email, {
            title: event.title,
            date: event.date,
            location: event.location,
        });
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

router.get("/:userId", async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.params.userId }).populate("eventId");
        res.status(200).json(bookings);
    } catch (error) {
        console.error("Error fetching bookings:", error);
        res.status(500).json({ message: "Error fetching bookings" });
    }
});

router.delete("/:bookingId", async (req, res) => {
    const { bookingId } = req.params;

    try {
        const booking = await Booking.findById(bookingId);
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }
        const eventId = booking.eventId;

        await Booking.findByIdAndDelete(bookingId);

        await Event.findByIdAndUpdate(eventId, { $inc: { bookings: -1 } });

        return res.status(200).json({ message: "Booking deleted successfully" });
    } catch (error) {
        console.error("Error deleting booking:", error);
        return res.status(500).json({ message: "Failed to delete booking", error });
    }
});

module.exports = router;
