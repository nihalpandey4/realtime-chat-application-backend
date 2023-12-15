const passwordHash = require("password-hash");
const fetchUser = require("../../database/services/fetchUser");
const createToken = require("./createToken");
module.exports = async (userName, password) => {
  try {
    const user = await fetchUser(userName);
    if (!user) throw new Error("user not found");
    let hashedPassword = user.password;
    let isValid = await passwordHash.verify(password, hashedPassword);
    if (isValid) {
      let token = await createToken(user);
      return { token, userName };
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};
