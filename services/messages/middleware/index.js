const bodyParser = require("body-parser");
const logger = require("morgan");
const loggerConfig = require("../log");
const validateUser = require("./validateUser");

module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(logger("combined", { stream: loggerConfig }));
  app.use("*", validateUser);
};
