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
    default: Date.now
  }
});

module.exports = mongoose.model("message", MessageSchema);
