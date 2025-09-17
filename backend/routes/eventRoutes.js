const express = require("express");
const EventModel = require("../models/Event");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const events = await EventModel.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
