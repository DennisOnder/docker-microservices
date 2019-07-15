const app = require("express")();
const config = require("./config");
const middleware = require("./middleware");
const router = require("./router");

middleware(app);

app.use(router);

app.listen(config.PORT, err => {
  if (err) {
    console.error("An error has occured!", err);
    process.exit(1);
  }
  console.log(
    `Web service running on http://localhost:${config.PORT} in the ${
      config.ENV
    } environment.`
  );
});
