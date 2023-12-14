const userModel = require("../mongo/models/userModel");

module.exports = async (userName) => {
  try {
    let user = await userModel.findOne({
      userName,
    });
    return user;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
