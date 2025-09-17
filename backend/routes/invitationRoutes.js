const express = require("express");
const InvitationModel = require("../models/invitation");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const invitation = await InvitationModel.find();
    res.status(200).json(invitation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
