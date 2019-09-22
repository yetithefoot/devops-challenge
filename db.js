const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dbName = 'ops-challenge';

module.exports = async function(dburl) {
	try {
		const client = new MongoClient(dburl, { useNewUrlParser: true, useUnifiedTopology: true });

		await client.connect();

		console.log('Connected to db');
		return client.db(dbName);
	} catch (err) {
		console.error('Can not connect to db', err);
	}
}

