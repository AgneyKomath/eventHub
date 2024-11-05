const mongoose = require("mongoose");

const MONGODB_URI = "";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
        });
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err.message);
        process.exit(1); 
    }
};

module.exports = connectDB;
