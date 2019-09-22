const MongoClient = require('mongodb').MongoClient;
const dbName = 'devops-challenge';
const collectionName = 'api-calls';

module.exports = async function(dburl) {
	try {
		const client = new MongoClient(dburl, { useNewUrlParser: true, useUnifiedTopology: true });

		await client.connect();

		console.log('Connected to db');
		const db = client.db(dbName);
		return {
			logRequest: document => {
				const collection = db.collection(collectionName);
				return collection.insert(document);
			}
		};
	} catch (err) {
		console.error('Can not connect to db', err);
	}
};


