const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
    groupName: { type: String, required: true },
    description: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true });

const GroupModel = mongoose.model("Group", GroupSchema, "Group");

module.exports = GroupModel;