const insertUserService = require("../../database/services/insertUser");

module.exports = async (userName, password) => {
  try {
    let userDetails = {
      userName,
      password,
    };
    userDetails = await insertUserService(userName, password);
    return userDetails;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
