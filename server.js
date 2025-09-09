import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Event from "./backend/models/Event.js";

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

    // Alle events ophalen
    app.get("/events", async (req, res) => {
      const events = await Event.find();
      res.json(events);
    });

    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error("Connection error:", err);
  }
}

startServer();
