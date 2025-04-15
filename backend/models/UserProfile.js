const mongoose = require('mongoose');

const UserProfileSchema = new mongoose.Schema({
  objectID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  university: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('UserProfile', UserProfileSchema);
