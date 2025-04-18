const ChatMessage = require('../models/ChatMessage');
const GroupChat = require('../models/GroupChat');

const chatController = {
  // Send a message (user or group)
  sendMessage: async (req, res) => {
    try {
      const message = new ChatMessage(req.body);
      const saved = await message.save();
      res.status(201).json(saved);
    } catch (err) {
      res.status(500).json({ error: 'Failed to send message', details: err });
    }
  },

  getMessagesForUser: async (req, res) => {
    const { username } = req.params;
  
    try {
      const messages = await ChatMessage.find({
        type: 'UserMessage',
        $or: [
          { senderId: username },
          { receiverId: username },
        ],
      }).sort({ time: 1 });
  
      res.json(messages);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch user messages', details: err });
    }
  },

  // Get messages for a group
  getGroupMessages: async (req, res) => {
    const { groupId } = req.params;
    try {
      const messages = await ChatMessage.find({
        type: 'GroupMessage',
        receiverId: groupId,
      }).sort({ time: 1 });
      res.json(messages);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch group messages', details: err });
    }
  },

  // Create a new group chat
  createGroup: async (req, res) => {
    const { groupId, users } = req.body;
    try {
      const group = new GroupChat({ groupId, users });
      const saved = await group.save();
      res.status(201).json(saved);
    } catch (err) {
      res.status(500).json({ error: 'Failed to create group', details: err });
    }
  },

  // Get all groups a user is in
  getGroupsForUser: async (req, res) => {
    const { userId } = req.params;
    try {
      const groups = await GroupChat.find({ users: userId });
      res.json(groups);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch groups', details: err });
    }
  }
};

module.exports = chatController;
