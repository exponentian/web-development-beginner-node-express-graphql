const graphql = require('graphql');
const resolver = require('./resolver');
const { ProfessorType, CourseType } = require('./types');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;


const Query = new GraphQLObjectType({
  name: 'QueryType',
  fields: {
    professors: {
      type: new GraphQLList(ProfessorType),
      resolve: resolver.getAllProfessors
    },
    professor: {
      type: ProfessorType,
      args: { 
        id: { type: GraphQLID } 
      },
      resolve: resolver.getProfessor
    },
    courses: {
      type: new GraphQLList(CourseType),
      resolve: resolver.getAllCourses
    },
    course: {
      type: CourseType,
      args: { 
        id: { type: GraphQLID } 
      },
      resolve: resolver.getCourse
    },
  }
});

module.exports = Query;