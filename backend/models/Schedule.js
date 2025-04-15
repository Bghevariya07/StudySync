const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
  sessionId: {
    type: String,
    required: true,
    unique: true
  },
  timeFrom: {
    type: Number,
    required: true
  },
  timeTo: {
    type: Number,
    required: true
  },
  courseId: {
    type: String,
    required: true
  },
  sessionName: {
    type: String,
    required: true
  },
  note: {
    type: String
  },
  members: {
    type: [String], // Array of usernames
    default: []
  }
}, { timestamps: true });

module.exports = mongoose.model('Schedules', ScheduleSchema);
