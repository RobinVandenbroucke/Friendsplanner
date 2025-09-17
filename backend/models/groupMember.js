const mongoose = require("mongoose");

const groupMemberSchema = new mongoose.Schema({
    groupId: { type: mongoose.Schema.Types.ObjectId, ref: "Group", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    role: { type: String, enum: ["member", "admin"], default: "member" },
    status: { type: String, enum: ["active", "idle", "invisible"], default: "active" },
    joinedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model("GroupMember", groupMemberSchema, "GroupMember");