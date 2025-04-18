const mongoose = require('mongoose');

const groupChatSchema = new mongoose.Schema({
  groupId: { type: String, required: true },
  users: { type: [String], default: [] },
});

module.exports = mongoose.model('GroupChat', groupChatSchema);
