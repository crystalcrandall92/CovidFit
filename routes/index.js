const path = require("path");
const router = require("express").Router();

// API Routes
router.use("/api", require("./api"));
router.use("/auth", require("./auth"))


router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
