const app = require("express")();
const config = require("./config");

app.get("/", (req, res) => res.send("Web service!"));

app.listen(config.PORT, err => {
  if (err) {
    console.error("An error has occured!", err);
    process.exit(1);
  }
  console.log(`Web service running on port ${config.PORT}`);
});
