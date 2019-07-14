const app = require("express")();
const connectDB = require("./config/database");
const config = require("./config");
const router = require("./router");
const passport = require("passport");
const passportConfig = require("./config/passport");
const middleware = require("./middleware");

middleware(app);

app.use(passport.initialize(passportConfig));

app.use(router);

connectDB();

app.listen(config.PORT, err => {
  if (err) {
    console.error("An error has occured!", err);
    process.exit(1);
  }
  console.log(
    `Authentication service running on port ${config.PORT} in the ${
      config.ENV
    } environment.`
  );
});
