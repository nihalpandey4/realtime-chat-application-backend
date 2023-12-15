module.exports = {
  PORT: 3000,
  statusCodes: require("./statusCodes.json"),
  httpErrorMessages: require("./httpErrorMessages.json"),
  mongooseConnectionUrl: require("./dbCredential.json").mongoConnectionUrl,
  privateKeyJWT: require("fs").readFileSync("config/realTimeKey", "utf-8"),
};
