const router = require("express").Router();
const auth = require("./auth");
const authenticateMiddleware = require("../../middlewares/authenticateMiddleware");

router.use("/auth", auth);
router.use("/chatRoom", authenticateMiddleware, require("./chatRooms"));
router.use("/chatMessage", authenticateMiddleware, require("./chatMessages"));

module.exports = router;
