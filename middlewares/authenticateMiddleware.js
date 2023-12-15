const jsonWebToken = require("jsonwebtoken");
const { privateKeyJWT, statusCodes, httpErrorMessages } = require("../config");
const fetchUser = require("../database/services/fetchUser");

module.exports = async (req, res, next) => {
  try {
    const authToken = req.headers.authorization?.split("Bearer ")[1] || "";
    if (!authToken) throw new Error("token not supplied");
    const decoded = jsonWebToken.verify(authToken, privateKeyJWT);
    if (decoded) {
      const user = await fetchUser(decoded.userName);
      if (user) {
        req.user = user.toJSON();
        next();
      } else throw new Error(httpErrorMessages.UserNotFound);
    } else {
      throw new Error(httpErrorMessages.InvalidToken);
    }
  } catch (err) {
    res.status(statusCodes.unAuthorized).json({
      message: err.message,
    });
  }
};
