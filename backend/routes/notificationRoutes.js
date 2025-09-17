const express = require("express");
const NotificationModel = require("../models/notification");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const notification = await NotificationModel.find();
    res.status(200).json(notification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
