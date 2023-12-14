const { statusCodes, httpErrorMessages } = require("../../../../config");
const signupUserService = require("../../../../services/auth/SignupUser");
module.exports = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
      return res.status(statusCodes.badRequest).json({
        message: httpErrorMessages.MandatoryParams,
      });
    }

    const result = await signupUserService(username, password);

    return res.status(statusCodes.success).json({
      username,
      password,
      result,
    });
  } catch (err) {
    console.error(err);
    return res.status(statusCodes.badRequest).json({
      message: err.message,
    });
  }
};
