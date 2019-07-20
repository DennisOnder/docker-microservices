const Message = require("../models/Message");

module.exports = {
  getMessages: async () => {
    try {
      return await Message.find();
    } catch (error) {
      console.error(error);
    }
  }
};
