const express = require("express");
const GroupMemberModel = require("../models/groupMember");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const groupMembers = await GroupMemberModel.find();
    res.status(200).json(groupMembers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
