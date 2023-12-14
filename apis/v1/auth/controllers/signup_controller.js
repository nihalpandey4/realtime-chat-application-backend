const { statusCodes, httpErrorMessages } = require("../../../../config");

module.exports = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
      return res.status(statusCodes.badRequest).json({
        message: httpErrorMessages.MandatoryParams,
      });
    }

    return res.status(statusCodes.success).json({
      username,
      password,
    });
  } catch (err) {
    console.error(err);
    return res.status(statusCodes.badRequest).json({
      message: err.message,
    });
  }
};
