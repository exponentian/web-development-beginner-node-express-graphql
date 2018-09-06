const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

const schema = require('./schema');
const { MONGODB_URI } = require('./config');

mongoose.set('useCreateIndex', true);
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
  .then(connection => console.log('Successfully connected to MongoDB'))
  .catch(error => console.log(error.message));


const app = express();


// allow Cross-Origin Resource Sharing (CORS)
app.use( cors() );

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));


app.listen(6006, () => {
  console.log("app is up and running on port 6006");
});