const chatMessagesModel = require("../../mongo/models/chatMessages");
module.exports = async (chatRoomName, chatRoomId, user, message) => {
  try {
    let chatMessage = new chatMessagesModel({
      chatRoomId,
      chatRoomName,
      sendByUserId: user._id,
      sendByUserName: user.userName,
      message,
    });
    chatMessage = await chatMessage.save();
    return chatMessage;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
