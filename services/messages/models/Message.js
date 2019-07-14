const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true
  },
  createdBy: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: Date.now
  }
});

module.exports = mongoose.model("message", MessageSchema);
