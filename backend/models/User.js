const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  objectID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  courses: {
    type: [String], // default empty list of course codes
    default: []
  }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
