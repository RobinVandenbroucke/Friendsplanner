const express = require("express");
const EventAttendeeModel = require("../models/eventAttendee");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const EventAttendee = await EventAttendeeModel.find();
    res.status(200).json(EventAttendee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
