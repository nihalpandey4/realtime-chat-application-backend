const chatRoomModel = require("../../mongo/models/chatRoom");
module.exports = async (searchText) => {
  try {
    const chatRooms = await chatRoomModel
      .find()
      .sort({ chatRoomName: 1 })
      .select({
        chatRoomName: 1,
        createdByUserName: 1,
      });
    return chatRooms;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
