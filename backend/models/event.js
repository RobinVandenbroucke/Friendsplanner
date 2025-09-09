import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: "Group", required: true },
  ownerUserId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: { type: String },
  startsAt: { type: Date, required: true },
  endsAt: { type: Date, required: true },
  visibility: { type: String, enum: ["group", "private"], default: "group" },
  location: { type: String }
}, { timestamps: true });

// force mongoose to use the "Event" collection instead of "events"
export default mongoose.model("Event", eventSchema, "Event");
