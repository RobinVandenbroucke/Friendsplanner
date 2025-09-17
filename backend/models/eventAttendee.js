const mongoose = require("mongoose");

const eventAttendeeSchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    status: { type: String, enum: ["going", "interested", "not going"], required: true }
}, { timestamps: true });

module.exports = mongoose.model("EventAttendee", eventAttendeeSchema, "EventAttendee");