const jwt = require("jsonwebtoken");
const fs = require("fs");

module.exports = async (userDetails) => {
  try {
    const privateKey = fs.readFileSync("config/realtimeKey", "utf-8");
    const token = jwt.sign(
      {
        userName: userDetails.userName,
        userId: userDetails._id + "",
      },
      privateKey
    );
    return token;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
