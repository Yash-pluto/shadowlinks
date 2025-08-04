const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const Star = require("./models/Star"); // ✅ THIS LINE
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Create HTTP server
const server = http.createServer(app);

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/shadowlinks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Setup Socket.IO server
const io = new Server(server, {
  cors: {
    origin: "*", // your frontend port
    methods: ["GET", "POST"],
  },
});

// Socket.IO connection event
io.on("connection", async (socket) => {
  console.log("⚡ A user connected");

  try {
    // Check if a star doc exists, else create one
    let starDoc = await Star.findOne();
    if (!starDoc) {
      starDoc = await Star.create({ count: 0 });
    }

    // Send current count to client
    socket.emit("starCount", starDoc.count);
  } catch (err) {
    console.error("❌ Error sending star count:", err);
  }

  socket.on("disconnect", () => {
    console.log("🚫 A user disconnected");
  });
});

// API to increment stars
app.post("/api/stars", async (req, res) => {
  try {
    let starDoc = await Star.findOne();
    if (!starDoc) {
      starDoc = await Star.create({ count: 1 });
    } else {
      starDoc.count++;
      await starDoc.save();
    }

    io.emit("starCount", starDoc.count); // broadcast new count
    res.json({ count: starDoc.count });
  } catch (err) {
    console.error("❌ Error updating stars:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// API to get star count manually
app.get("/api/stars", async (req, res) => {
  try {
    const starDoc = await Star.findOne();
    res.json({ count: starDoc ? starDoc.count : 0 });
  } catch (err) {
    console.error("❌ Error getting stars:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Start server
server.listen(5000, () => console.log("🔥 Backend running on port 5000"));
