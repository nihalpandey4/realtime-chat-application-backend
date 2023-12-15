const mongoose = require("mongoose");
const mongooseConnection = require("../index");

const chatMessageSchema = new mongoose.Schema(
  {
    sendByUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userdetails",
    },
    sendByUserName: {
      type: String,
      required: true,
    },
    chatRoomName: {
      type: String,
      required: true,
    },
    chatRoomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "chatRooms",
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const chatMessageModel = mongooseConnection.model(
  "chatMessage",
  chatMessageSchema
);

module.exports = chatMessageModel;
