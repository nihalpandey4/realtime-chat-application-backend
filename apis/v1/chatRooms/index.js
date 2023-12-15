const router = require("express").Router();

router.post("/", require("./controllers/createChatroom"));
router.get("/", require("./controllers/fetchChatrooms"));

module.exports = router;
