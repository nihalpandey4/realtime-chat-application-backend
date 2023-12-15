const mongoose = require("mongoose");
const mongooseConnection = require("../index");

const chatRoomSchema = new mongoose.Schema(
  {
    createdByUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userdetails",
    },
    createdByUserName: {
      type: String,
      required: true,
    },
    chatRoomName: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  },
  { timestamps: true }
);

const chatRoomModel = mongooseConnection.model("chatRoom", chatRoomSchema);

module.exports = chatRoomModel;
