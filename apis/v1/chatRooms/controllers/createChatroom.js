const { statusCodes, httpErrorMessages } = require("../../../../config");
const createChatRoom = require("../../../../services/chatRoom/createChatRoom");

module.exports = async (req, res) => {
  try {
    const chatRoomName = req.body.chatRoomName;
    const user = req.user;
    if (!chatRoomName) {
      throw new Error(httpErrorMessages.MandatoryParams);
    }
    const chatRoom = await createChatRoom(chatRoomName, user);
    return res.status(statusCodes.resourceCreated).json({
      message: "chatroorm created",
      data: {
        chatRoom,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(statusCodes.badRequest).json({
      message: err.message,
    });
  }
};
