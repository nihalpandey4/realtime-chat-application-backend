const router = require("express").Router();

router.post("/signup", require("./controllers/signup_controller"));

module.exports = router;
