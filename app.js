const express = require('express');
const bodyParser = require('body-parser');
const graphQlHttp = require('express-graphql');
const mongoose = require('mongoose');
const path = require('path');


const graphQlSchema = require('./graphql/schema/index');
const graphQlResolver = require('./graphql/resolvers/index');
const isAuth = require('./middleware/is-auth');

const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(isAuth);

app.use('/graphql', graphQlHttp({
  schema: graphQlSchema,
  rootValue: graphQlResolver,
  graphiql: true,
}));

app.use(express.static('frontend/build'));
//app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
});

mongoose.connect(
  `mongodb+srv://Dams:Chat0666@eventcluster-qqgzo.mongodb.net/baron-crane?retryWrites=true`,
).then(() => {
  console.log('application connecté sur le port ' + port);
  app.listen(port);
}).catch((err) => {
  console.log(err);
});
