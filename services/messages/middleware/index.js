const bodyParser = require("body-parser");
const validateUser = require("./validateUser");

module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use("*", validateUser);
};
