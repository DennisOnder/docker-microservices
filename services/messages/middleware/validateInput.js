const isEmpty = require("../functions/isEmpty");

module.exports = (req, res, next) => {
  if (isEmpty(req.body.message)) {
    res.status(400).json({ error: "Please provide a message." });
    return;
  }
  next();
};
