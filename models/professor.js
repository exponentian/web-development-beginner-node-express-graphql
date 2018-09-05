const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProfessorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  professorNumber: {
    type: Number,
    required: true,
    unique: true
  },
  department: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model('Professor', ProfessorSchema);