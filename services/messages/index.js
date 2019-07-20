const app = require("express")();
const connectDB = require("./config/database");
const config = require("./config");
const router = require("./router");
const middleware = require("./middleware");
const server = require("http").Server(app);
const io = require("socket.io")(server);
const events = require("./events");

app.get("/", (req, res) => res.send("Messaging service!"));

middleware(app);

app.use(router);

connectDB();

server.listen(config.PORT, err => {
  if (err) {
    console.error("An error has occured!", err);
    process.exit(1);
  }
  console.log(
    `Messaging service running on http://localhost:${config.PORT} in the ${
      config.ENV
    } environment.`
  );
});

io.on("connection", socket => {
  socket.on("get_messages", async () =>
    socket.emit("dispatch_messages", await events.getMessages())
  );
  socket.on("new_message", async data => {
    await events.newMessage(data);
    socket.emit("get_messages");
  });
});
