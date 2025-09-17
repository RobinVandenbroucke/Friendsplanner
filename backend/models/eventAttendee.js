const mongoose = require("mongoose");

const EventAttendeeSchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    status: { type: String, enum: ["going", "interested", "not going"], required: true }
}, { timestamps: true });

const EventAttendeeModel = mongoose.model("EventAttendee", EventAttendeeSchema, "EventAttendee");

module.exports = EventAttendeeModel;