const router = require("express").Router();
const { statusCodes } = require("../config");
const v1 = require("./v1");

router.use("/v1", v1);

router.get("/healthCheck", (req, res) => {
  res.status(statusCodes.success).json({
    working: "perfectly",
  });
});

module.exports = router;
