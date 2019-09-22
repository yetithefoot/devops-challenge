const { port, dburl } = require('./config');

(async () => {
	const { logRequest } = await require('./db')(dburl);
	const Koa = require('koa');
	const app = new Koa();

	app.name = makeAppName({port});

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
		const start = Date.now();
		await logRequest({
			appName: app.name,
			timestamp: new Date(),
			method: ctx.method,
			url: ctx.url
		});
		ctx.mongoOpTimeMs = Date.now() - start;
		
		await next();
	});

	app.use(async ctx => {
		ctx.status = generateChaoticalResponseCode(ctx);
	});

	app.listen(port);
	console.log(`Server '${app.name}' is listening on port ${port}`);
})();


/**
 * Emulate some server errors, just for fun
 */
function generateChaoticalResponseCode(ctx) {
	if (ctx.responseTimeMs > 300) return 528;
	if (ctx.mongoOpTimeMs > 100) return 529;
	if (Math.random() > 0.95) return 500;
	else return 200;
}

/**
 * Make app name based on passed app arguments
 */
function makeAppName({port}) {
	return `app-${port}`;
}
