const Professor = require('../models/professor');
const Course = require('../models/course');


/* Professors */

// get
exports.getAllProfessors = (parent, args) => Professor.find({});
exports.getProfessor = (parent, args) => Professor.findById(args.id);
exports.getProfessorFromCourse = (parent, args) => Professor.findById(parent.professor);

// add
exports.addProfessor = (parent, args) => {
  const professor = new Professor({
    name: args.name,
    number: args.number,
    department: args.department,
    position: args.position
  });

  return professor.save();
};

// update
exports.updateProfessor = (parent, args) => {
  const data = {};
  if (args.name !== undefined) data.name = args.name;
  if (args.number !== undefined) data.number = args.number;
  if (args.department !== undefined) data.department = args.department;
  if (args.position !== undefined) data.position = args.position;
  return Professor.findByIdAndUpdate(args.id, data, {new: true});
}; 

// remove
exports.removeProfessor = (parent, args) => Professor.findByIdAndRemove(args.id);



/* Courses */

// get
exports.getAllCourses = (parent, args) => Course.find({});
exports.getCourse = (parent, args) => Course.findById(args.id);
exports.getCoursesByProfessor = (parent, args) => Course.find({ professor: parent.id });

// add
exports.addCourse = (parent, args) => {
  const course = new Course({
    name: args.name,
    code: args.code,
    description: args.description,
    professor: args.professor
  });
  return course.save();
};

// update
exports.updateCourse = (parent, args) => {
  const data = {};
  if (args.name !== undefined) data.name = args.name;
  if (args.code !== undefined) data.code = args.code;
  if (args.description !== undefined) data.description = args.description;
  if (args.professor !== undefined) data.professor = args.professor;
  return Course.findByIdAndUpdate(args.id, data, {new: true});
}; 

// remove
exports.removeCourse = (parent, args) => Course.findByIdAndRemove(args.id);
