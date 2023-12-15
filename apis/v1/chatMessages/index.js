const router = require("express").Router();

router.post("/", require("./controllers/sendMessage"));
router.get("/", require("./controllers/fetchMessages"));

module.exports = router;
