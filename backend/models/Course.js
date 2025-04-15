const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  objectID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true
  },
  coursename: {
    type: String,
    required: true
  },
  courseId: {
    type: String,
    required: true,
    unique: true
  },
  university: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Course', CourseSchema);
