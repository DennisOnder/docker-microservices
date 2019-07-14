const app = require("express")();
const config = require("./config");
const router = require("./router");

app.use(router);

app.listen(config.PORT, err => {
  if (err) {
    console.error("An error has occured!", err);
    process.exit(1);
  }
  console.log(`Authentication service running on port ${config.PORT}`);
});
