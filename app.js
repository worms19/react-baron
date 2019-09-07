const express = require('express');
const bodyParser = require('body-parser');
const graphQlHttp = require('express-graphql');
const mongoose = require('mongoose');
const path = require('path');
const graphQlSchema = require('./graphql/schema/index');
const graphQlResolver = require('./graphql/resolvers/index');
const isAuth = require('./middleware/is-auth');
const port = process.env.PORT || 8000;
const http = require('http');

const app = express();
const server = http.createServer(app);

// set the port of our application
// process.env.PORT lets the port be set by Heroku

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
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'frontend', 'build')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/ping', function (req, res) {
  return res.send('pong');
});



mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@eventcluster-qqgzo.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`,
).then(() => {
  server.listen(port, () => {
    console.log(`server listening to port ${port}`);
  });
}).catch((err) => {
  console.log(err);
});

module.exports = app;