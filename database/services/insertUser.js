const userModel = require("../mongo/models/userModel");

module.exports = async (userName, password) => {
  try {
    let user = new userModel({
      userName,
      password,
    });
    user = await user.save();
    return user;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
