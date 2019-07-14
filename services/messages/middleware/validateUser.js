const jwt = require("jsonwebtoken");
const config = require("../config");

module.exports = (req, res, next) => {
  jwt.verify(
    req.headers.authorization.replace("Bearer ", ""),
    config.SECRET_OR_KEY,
    (err, decoded) => {
      if (err) {
        res.status(401).send("Unauthorized");
        return;
      }
      req.user = decoded;
      next();
    }
  );
};
