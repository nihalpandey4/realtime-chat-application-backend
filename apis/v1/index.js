const router = require("express").Router();
const auth = require("./auth");
const authenticationMiddleware = require("../../middlewares/authenticateMiddleware");

router.use("/auth", auth);
router.get("/authorizedRoute", authenticationMiddleware, (req, res) => {
  res.send("working");
});

module.exports = router;
