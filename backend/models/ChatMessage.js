const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema({
  senderId: { type: String, required: true },
  receiverId: { type: String, required: true },
  message: { type: String },
  time: { type: Date, required: true },
  type: {
    type: String,
    enum: ['UserMessage', 'GroupMessage'],
    required: true,
  },
});

module.exports = mongoose.model('ChatMessage', chatMessageSchema);
