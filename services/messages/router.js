const router = require("express").Router();
const Message = require("./models/Message");
const validateInput = require("./middleware/validateInput");
const validateUser = require("./middleware/validateUser");

router.get("/", (req, res) => res.send("Messaging service!"));

router.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find();
    if (messages.length === 0) {
      res.status(404).json({ error: "No messages." });
      return;
    }
    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
  }
});

// TODO => Replace promise with an event
router.post("/message", validateUser, validateInput, (req, res) => {
  new Message({ body: req.body.message, createdBy: req.user.id })
    .save()
    .then(message => res.status(200).json(message))
    .catch(err => console.error(err));
});

router.delete("/:messageId", validateUser, async (req, res) => {
  try {
    const message = await Message.findOne({
      _id: req.params.messageId,
      createdBy: req.user.id
    });
    if (!message) {
      res.status(400).json({ error: "Message not found." });
      return;
    }
    message
      .remove()
      .then(() =>
        res.status(200).json({ deleted: true, timestamp: Date.now() })
      );
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
