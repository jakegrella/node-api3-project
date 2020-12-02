const Users = require('../users/userDb');

const validateUserId = async (req, res, next) => {
	const { id } = req.params;
	try {
		const user = await Users.getById(id);
		if (!user) {
			res.status(404).json({ message: `User with id ${id} does not exist` });
		} else {
			req.user = user;
			next();
		}
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ errorMessage: '500 error' });
	}
};

module.exports = validateUserId;
