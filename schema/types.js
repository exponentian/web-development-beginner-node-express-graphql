const graphql = require('graphql');
const resolver = require('./resolver');

// Reference: graphql/type
// https://graphql.org/graphql-js/type/

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;


const ProfessorType = new GraphQLObjectType({
  name: 'Professor',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    number: { type: GraphQLString },
    department: { type: GraphQLString },
    position: { type: GraphQLString },
    courses: { 
      type: new GraphQLList(CourseType),
      resolve: resolver.getCoursesByProfessor
    }
  })
});


const CourseType = new GraphQLObjectType({
  name: 'Course',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    code: { type: GraphQLString },
    description: { type: GraphQLString },
    professor: { 
      type: ProfessorType,
      resolve: resolver.getProfessorFromCourse
    }
  })
});

module.exports.ProfessorType = ProfessorType;
module.exports.CourseType = CourseType;