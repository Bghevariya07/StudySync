const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('/send', chatController.sendMessage);
router.post('/group', chatController.createGroup);

router.put('/group/add/:groupId', chatController.addUserToGroupChat);
router.put('/group/remove/:groupId', chatController.removeUserFromGroupChat);

router.get('/user/:username', chatController.getMessagesForUser);
router.get('/group/:groupId', chatController.getGroupMessages);
router.get('/groups/:userId', chatController.getGroupsForUser);

module.exports = router;
