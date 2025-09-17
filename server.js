const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//routes
const eventRoutes = require("./backend/routes/eventRoutes");
const groupRoutes = require("./backend/routes/groupRoutes");
const eventAttendeeRoutes = require("./backend/routes/eventAttendeeRoutes");
const invitationRoutes = require("./backend/routes/invitationRoutes");
const notificationRoutes = require("./backend/routes/notificationRoutes");
const userRoutes = require("./backend/routes/userRoutes");
const groupMemberRoutes = require("./backend/routes/groupMemberRoutes");


dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas");

    app.use("/events", eventRoutes);
    app.use("/groups", groupRoutes);
    app.use("/eventAttendees", eventAttendeeRoutes);
    app.use("/invitations", invitationRoutes);
    app.use("/notifications", notificationRoutes);
    app.use("/users", userRoutes);
    app.use("/groupMembers", groupMemberRoutes);
    
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error("Connection error:", err);
  }
}

startServer();
