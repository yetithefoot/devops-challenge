const argv = require('minimist')(process.argv.slice(2));
if (!argv.port) {
	console.error(`--port isn't specified`);
	process.exit(1);
}

if (!process.env.MONGODB_URL) {
	console.error(`Environment variable MONGODB_URL isn't specified`, process.env.MONGODB_URL);
	process.exit(1);
}

(async () => {
	const db = await require('./db')(process.env.MONGODB_URL);
	const Koa = require('koa');
	const app = new Koa();
	app.port = argv.port;
	app.name = `app-${argv.port}`;

	app.use(async (ctx, next) => {
		await next();
		console.log(`${ctx.method} ${ctx.url} - ${ctx.responseTimeMs}ms`);
	});

	app.use(async (ctx, next) => {
		const start = Date.now();
		await next();
		ctx.responseTimeMs = Date.now() - start;
	});

	app.use(async (ctx, next) => {
		const collection = db.collection('api-calls');

		const start = Date.now();
		await collection.insert({
			appName: app.name,
			timestamp: new Date(),
			method: ctx.method,
			url: ctx.url
		});
		ctx.mongoOpTimeMs = Date.now() - start;
		
		await next();
	});

	app.use(async ctx => {
		// emulate server error, just for fun
		ctx.status = generateRandomizedResponseCode(ctx);
	});

	app.listen(app.port);
	console.log(`server '${app.name}' is listening on port ${app.port}`);
})();


function generateRandomizedResponseCode(ctx) {
	if (ctx.responseTimeMs > 300) return 528;
	if (ctx.mongoOpTimeMs > 100) return 529;
	if (Math.random() > 0.95) return 500;
	else return 200;
}

