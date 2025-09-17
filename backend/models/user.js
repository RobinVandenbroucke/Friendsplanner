const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    displayName: { type: String, required: true }
}, { timestamps: true });

const UserModel = mongoose.model("User", UserSchema, "User");

module.exports = UserModel;