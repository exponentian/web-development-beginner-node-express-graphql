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
        number: { type: new GraphQLNonNull(GraphQLString) },
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
        number: { type: GraphQLString },
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
        code: { type: new GraphQLNonNull(GraphQLString) },
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
        code: { type: GraphQLString },
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