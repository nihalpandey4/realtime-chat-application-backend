const chatRoomModel = require("../../mongo/models/chatRoom");
module.exports = async (chatRoomName, user) => {
  try {
    let chatRoom = new chatRoomModel({
      chatRoomName,
      createdByUserId: user._id,
      createdByUserName: user.userName,
    });
    chatRoom = await chatRoom.save();
    return chatRoom;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
