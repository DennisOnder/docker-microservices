const router = require("express").Router();

router.get("/", (req, res) => res.sendFile(__dirname + "/static/index.html"));

router.get("/dashboard", (req, res) =>
  res.sendFile(__dirname + "/static/dashboard.html")
);

module.exports = router;
