const express = require('express');
const db = require('../../database/schema.js');
const models = require('../../database/models.js')
const admin = require('firebase-admin');
const graphqltools = require('graphql-tools');
const app = express();
const port = 8080;
const TOKEN = require('../../TOKENS.js');
const serviceAccount = require("../../serviceAccount.json");
const body_parser = require('body-parser');
const collections = require('../../database/collections.js'); // db functions live in here
const graphQLSchema = require('../../database/graphQLSchema.js');
const resolvers = require('../../database/resolvers.js');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');
const cors = require('cors')

const { graphiqlExpress, graphqlExpress } = require('graphql-server-express');

// const compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/www'));
app.use(cors({
	allowedOrigins: [
		'*'
	]
}))

app.use('/graphql', cors(), graphqlHTTP({
	schema: graphqltools.makeExecutableSchema({typeDefs: graphQLSchema, resolvers: resolvers}),
	graphiql: true,
	context: collections
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

// app.use(webpackDevMiddleware(compiler, {
//   hot: true,
//   filename: 'bundle.js',
//   publicPath: '/',
//   stats: {
//     colors: true,
//   },
//   historyApiFallback: true,
// }));

// app.use('/graphql', graphqlHTTP({
// 	schema: graphqltools.makeExecutableSchema({typeDefs: graphQLSchema, resolvers: resolvers}),
// 	graphiql: true,
// 	context: collections
// }));

app.listen(port, () => console.log('Listening on port', port));