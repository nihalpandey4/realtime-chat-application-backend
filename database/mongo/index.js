const mongoose = require("mongoose");
const { mongooseConnectionUrl } = require("../../config");

const databaseName = "dev";

mongoose.connect(mongooseConnectionUrl + databaseName).then(() => {
  console.log(mongooseConnectionUrl, "connected");
});

module.exports = mongoose;
