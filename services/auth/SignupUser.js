const userModelMongo = require("../../database/mongo/models/userModel");

module.exports = async (userName, password) => {
  try {
    let userDetails = {
      userName,
      password,
    };
    userDetails = await userModelMongo.insertMany([userDetails]);
    console.log(userDetails);
    return userDetails;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
