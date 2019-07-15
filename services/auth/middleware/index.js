const bodyParser = require("body-parser");
const logger = require("morgan");
const loggerConfig = require("../log");
const cors = require("cors");

module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());
  app.use(logger("combined", { stream: loggerConfig }));
};
