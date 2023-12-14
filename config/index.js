module.exports = {
  PORT: 3000,
  statusCodes: require("./statusCodes.json"),
  httpErrorMessages: require("./httpErrorMessages.json"),
  mongooseConnectionUrl: require("./dbCredential.json").mongoConnectionUrl,
};
