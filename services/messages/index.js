const app = require("express")();
const connectDB = require("./config/database");
const config = require("./config");
const router = require("./router");

app.use(router);

connectDB();

app.listen(config.PORT, err => {
  if (err) {
    console.error("An error has occured!", err);
    process.exit(1);
  }
  console.log(
    `Messaging service running on port ${config.PORT} in the ${
      config.ENV
    } environment.`
  );
});
