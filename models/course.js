const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  professor: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model('Course', CourseSchema);