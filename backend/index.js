const express = require("express");
const connectDB = require("./config/db"); 
const cors = require("cors");
const eventRoutes = require("./routes/events"); 

const app = express();

app.use(cors());
app.use(express.json({ extended: false }));

connectDB();

app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api", eventRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
