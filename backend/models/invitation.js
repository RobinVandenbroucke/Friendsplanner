const mongoose = require("mongoose");

const invitationSchema = new mongoose.Schema({
    groupId: { type: mongoose.Schema.Types.ObjectId, ref: "Group", required: true },
    invitedEmail: { type: String, required: true },
    invitedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    expiresAt: { type: Date, required: true },
    acceptedAt: { type: Date },
    createdAt: { type: Date, default: Date.now },
    invitedUserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

module.exports = mongoose.model("Invitation", invitationSchema, "Invitation");