const jwt = require("jsonwebtoken");
const { privateKeyJWT } = require("../../config");

module.exports = async (userDetails) => {
  try {
    const token = jwt.sign(
      {
        userName: userDetails.userName,
        userId: userDetails._id + "",
      },
      privateKeyJWT
    );
    return token;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
