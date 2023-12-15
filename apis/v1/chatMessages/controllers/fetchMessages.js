const { statusCodes, httpErrorMessages } = require("../../../../config");
const fetchChatMessages = require("../../../../database/services/chatMessages/fetchChatMessages");

module.exports = async (req, res) => {
  try {
    const chatRoomId = req.query.chatRoomId;
    if (!chatRoomId) {
      throw new Error(httpErrorMessages.MandatoryParams);
    }
    const chatMessages = await fetchChatMessages(chatRoomId);
    return res.status(statusCodes.success).json({
      data: {
        chatMessages,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(statusCodes.badRequest).json({
      message: err.message,
    });
  }
};
