const router = require("express").Router();

router.post("/", require("./controllers/createChatroom"));

module.exports = router;
