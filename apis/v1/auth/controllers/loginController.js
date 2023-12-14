const { statusCodes, httpErrorMessages } = require("../../../../config");
const loginUserService = require("../../../../services/auth/LoginUser");
module.exports = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
      return res.status(statusCodes.badRequest).json({
        message: httpErrorMessages.MandatoryParams,
      });
    }

    const result = await loginUserService(username, password);

    return res.status(statusCodes.success).json({
      message: "user found",
      result,
    });
  } catch (err) {
    console.error(err);
    return res.status(statusCodes.badRequest).json({
      message: err.message,
    });
  }
};
