const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const eventRoutes = require("./backend/routes/eventRoutes");
const groupRoutes = require("./backend/routes/groupRoutes");

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas");

    app.use("/events", eventRoutes);
    app.use("/groups", groupRoutes);

    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error("Connection error:", err);
  }
}

startServer();
