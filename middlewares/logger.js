const logger = (req, res, next) => {
	console.log(
		`*request* method: ${req.method}  url: ${req.url}  timestamp: ${Date.now()}`
	);
	next();
};

module.exports = logger;
