const router = require("express").Router();

router.post("/signup", require("./controllers/signupController"));
router.post("/login", require("./controllers/loginController"));

module.exports = router;
