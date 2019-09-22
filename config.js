const argv = require('minimist')(process.argv.slice(2));

if (!argv.port) {
	console.error(`--port isn't specified`);
	process.exit(1);
}

if (!process.env.MONGODB_URL) {
	console.error(`Environment variable MONGODB_URL isn't specified`, process.env.MONGODB_URL);
	process.exit(1);
}

module.exports = {
	port: argv.port,
	dburl: process.env.MONGODB_URL
};