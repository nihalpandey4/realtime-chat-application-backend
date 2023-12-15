const mongoose = require("mongoose");
const chatMessageModel = require("../../mongo/models/chatMessages");
module.exports = async (chatRoomId) => {
  try {
    const chatMessages = await chatMessageModel
      .find({
        chatRoomId: new mongoose.Types.ObjectId(chatRoomId),
      })
      .sort({ createdAt: 1 });
    return chatMessages;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
