const express = require("express");
const GroupModel = require("../models/group");
const GroupMemberModel = require("../models/groupMember");

const router = express.Router();

// GET all groups (no filter)
router.get("/", async (req, res) => {
  try {
    const groups = await GroupModel.find();
    res.status(200).json(groups);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET all groups for a specific user
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const groupmember = await GroupMemberModel.find({ userId }).select("groupId");

    if (!groupmember.length) {
      return res.status(200).json([]); // no groups
    }

    const groupIds = groupmember.map((m) => m.groupId);
    const groups = await GroupModel.find({ _id: { $in: groupIds } });
    res.status(200).json(groups);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Create a new group (createdBy is userId of creator)
router.post("/", async (req, res) => {
  try {
    let group = new GroupModel({
      groupName: req.body.groupName,
      description: req.body.description,
      createdBy: req.body.createdBy
    });
    
    const savedGroup = await group.save();

      const groupMember = new GroupMemberModel({
        groupId: savedGroup._id,
        userId: req.body.createdBy,
        role: "admin",
        status: "active"
      });

      await groupMember.save();

      res.status(201).json({
        group: savedGroup,
        membership: groupMember
      });
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});

//Update group by ID
router.put("/:id", async (req, res) => {
  const groupId = req.params.id;
  const updates = req.body;
  try {
    const group = await GroupModel.findByIdAndUpdate(
      groupId,
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }
    res.status(200).json(group);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete group by ID
router.delete("/:id", async (req, res) => {
  try {
    const group = await GroupModel.findByIdAndDelete(req.params.id);
    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }
    
    //delete associated group members
    await GroupMemberModel.deleteMany({ groupId: req.params.id });
    res.status(200).json({ message: "Group and associated members deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
