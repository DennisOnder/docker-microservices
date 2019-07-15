const router = require("express").Router();

router.get("/", (req, res) => res.sendFile(__dirname + "/static/index.html"));

module.exports = router;
