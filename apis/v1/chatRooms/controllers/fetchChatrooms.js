const { statusCodes } = require("../../../../config");
const fetchChatRooms = require("../../../../database/services/chatRoom/fetchChatRooms");

module.exports = async (req, res) => {
  try {
    const chatRooms = await fetchChatRooms();
    return res.status(statusCodes.success).json({
      data: {
        chatRooms,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(statusCodes.badRequest).json({
      message: err.message,
    });
  }
};
