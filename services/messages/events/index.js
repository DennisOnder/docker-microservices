const Message = require("../models/Message");

module.exports = {
  getMessages: async () => {
    try {
      return await Message.find();
    } catch (error) {
      console.error(error);
    }
  },
  newMessage: async data => {
    const msg = new Message({ body: data.message, createdBy: data.email });
    console.log(msg);
  }
};
