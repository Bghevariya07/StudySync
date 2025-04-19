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

  // Add user to group chat
  addUserToGroupChat: async (req, res) => {
    const { groupId } = req.params;
    const { username } = req.body;

    try {
      const group = await GroupChat.findOne({ groupId: groupId });

      if (!group) {
        return res.status(404).json({ error: 'Group chat not found' });
      }

      if (group.users.includes(username)) {
        return res.status(400).json({ message: 'User already in the group' });
      }

      group.users.push(username);
      await group.save();

      res.json({ message: 'User added to group chat', group });
    } catch (err) {
      console.error('Error adding user to group chat:', err);
      res.status(500).json({ error: 'Failed to add user to group chat', details: err });
    }
  },

  removeUserFromGroupChat: async (req, res) => {
    const { groupId } = req.params;
    const { username } = req.body;

    try {
      const group = await GroupChat.findOne({ groupId });

      if (!group) {
        return res.status(404).json({ error: 'Group chat not found' });
      }

      if (!group.users.includes(username)) {
        return res.status(400).json({ message: 'User not found in group' });
      }

      group.users = group.users.filter(user => user !== username);
      await group.save();

      res.json({ message: 'User removed from group chat', group });
    } catch (err) {
      console.error('Error removing user from group chat:', err);
      res.status(500).json({ error: 'Failed to remove user from group chat', details: err });
    }
  },

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
