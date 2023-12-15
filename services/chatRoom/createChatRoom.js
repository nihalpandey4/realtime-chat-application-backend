const createChatRoomService = require("../../database/services/chatRoom/createChatRoom");

module.exports = async (chatRoomName, user) => {
  try {
    let chatRoom = await createChatRoomService(chatRoomName, user);
    return chatRoom;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
