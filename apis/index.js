const router = require("express").Router();
const { statusCodes } = require("../config");

router.get("/healthCheck", (req, res) => {
  res.status(statusCodes.success).json({
    working: "perfectly",
  });
});

module.exports = router;
