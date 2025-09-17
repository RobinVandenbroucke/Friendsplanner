const express = require("express");
const GroupModel = require("../models/group");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const groups = await GroupModel.find();
    res.status(200).json(groups);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
