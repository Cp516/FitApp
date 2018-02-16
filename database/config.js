var knex = require('knex')({
	client: 'mysql',
	connection: {
		host: 'fit-app.csunnfgridaf.us-east-1.rds.amazonaws.com',
		user: 'Fit_App',
		password: 'AmazonWS',
		database: 'Fit_App',
		charset: 'utf8'
	}
});

module.exports.knex = knex;