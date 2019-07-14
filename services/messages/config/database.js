const mongoose = require("mongoose");
const config = require("./");

let attemptCounter = 0;

module.exports = () => {
  if (attemptCounter > 3) {
    console.error("Unable to connect to the messaging database.");
    process.exit(1);
  }
  mongoose.connect(
    `mongodb://localhost:${config.DB_PORT}/messages'`,
    { useNewUrlParser: true },
    err => {
      if (err) {
        attemptCounter++;
      }
      console.log("Messaging database running.");
    }
  );
};
