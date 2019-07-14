const isEmpty = require("../functions/isEmpty");

module.exports = (req, res, next) => {
  if (isEmpty(req.body.email) || isEmpty(req.body.password)) {
    res.status(400).json({ error: "Please provide valid credentials." });
    return;
  }
  next();
};
