const insertUserService = require("../../database/services/insertUser");
const passwordHash = require("password-hash");

module.exports = async (userName, password) => {
  try {
    let userDetails = {
      userName,
      password,
    };
    const hashedPassword = passwordHash.generate(password);
    userDetails = await insertUserService(userName, hashedPassword);
    return userDetails;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
