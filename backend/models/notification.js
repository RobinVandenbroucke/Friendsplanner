const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
    type: { type: String, enum: ["event_reminder", "invitation", "other"], required: true },
    subject: { type: String, required: true },
    body: { type: String, required: true },
    status: { type: String, enum: ["unread", "read"], default: "unread" },
    createdAt: { type: Date, default: Date.now }
}, { timestamps: true });