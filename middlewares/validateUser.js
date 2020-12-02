const validateUser = (req, res, next) => {
	const { name } = req.body;
	if (!name) {
		res.status(400).json({ message: 'missing required name field' });
	} else next();
};

module.exports = validateUser;
