const { statusCodes, httpErrorMessages } = require("../../../../config");
const insertChatMessages = require("../../../../database/services/chatMessages/insertChatMessages");

module.exports = async (req, res) => {
  try {
    const chatRoomName = req.body.chatRoomName;
    const chatRoomId = req.body.chatRoomId;
    const user = req.user;
    const message = req.body.message;
    if (!chatRoomName || !chatRoomId || !message) {
      throw new Error(httpErrorMessages.MandatoryParams);
    }
    const chat = await insertChatMessages(
      chatRoomName,
      chatRoomId,
      user,
      message
    );
    return res.status(statusCodes.resourceCreated).json({
      message: "chatroorm created",
      data: {
        chat,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(statusCodes.badRequest).json({
      message: err.message,
    });
  }
};
