const bodyParser = require("body-parser");
const passport = require("passport");

module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(passport.initialize());
  require("../config/passport")(passport);
};
