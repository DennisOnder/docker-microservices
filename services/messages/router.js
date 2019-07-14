const router = require("express").Router();
const isEmpty = require("./functions/isEmpty");
const Message = require("./models/Message");

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
router.post("/message", (req, res) => {
  if (isEmpty(req.body.message)) {
    res.status(400).json({ error: "Please provide a message." });
    return;
  }
  new Message({ body: req.body.message, createdBy: req.user.id })
    .save()
    .then(message => res.status(200).json(message))
    .catch(err => console.error(err));
});

router.delete("/:messageId", async (req, res) => {
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
