const validatePost = (req, res, next) => {
	const { text } = req.body;
	if (!text) {
		res.status(400).json({ message: 'missing required text field' });
	} else next();
};

module.exports = validatePost;
