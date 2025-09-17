import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: "Group", required: true },
  ownerUserId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: { type: String },
  startsAt: { type: Date, required: true },
  endsAt: { type: Date, required: true },
  visibility: { type: String, enum: ["group", "private"], default: "group" },
  location: { type: String }
}, { timestamps: true });

const EventModel = mongoose.model("Event", EventSchema);

module.exports = EventModel;