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


const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addProfessor: {
      type: ProfessorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        professorNumber: { type: new GraphQLNonNull(GraphQLInt) },
        department: { type: new GraphQLNonNull(GraphQLString) },
        position: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: resolver.addProfessor
    },
    updateProfessor: {
      type: ProfessorType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        professorNumber: { type: GraphQLInt },
        department: { type: GraphQLString },
        position: { type: GraphQLString }
      },
      resolve: resolver.updateProfessor
    },
    removeProfessor: {
      type: ProfessorType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: resolver.removeProfessor
    },
    addCourse: {
      type: CourseType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        courseCode: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        professor: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: resolver.addCourse
    },
    updateCourse: {
      type: CourseType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        courseCode: { type: GraphQLString },
        description: { type: GraphQLString },
        professor: { type: GraphQLID }
      },
      resolve: resolver.updateCourse
    },
    removeCourse: {
      type: CourseType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: resolver.removeCourse
    }
  }
});


module.exports = Mutation;