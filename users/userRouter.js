const express = require('express');

const Users = require('./userDb');
const Posts = require('../posts/postDb');

const validateUserId = require('../middlewares/validateUserId');
const validateUser = require('../middlewares/validateUser');
const validatePost = require('../middlewares/validatePost');

const router = express.Router();

// 🌕   POST new user
router.post('/', [validateUser], async (req, res) => {
	try {
		await Users.insert(req.body);
		res.status(201).json(req.body);
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ errorMessage: '500 error' });
	}
});

// 🌕   POST new post for specific user
router.post('/:id/posts', [validatePost], async (req, res) => {
	try {
		await Posts.insert(req.body);
		res.status(201).json(req.body);
	} catch (err) {
		console.log(err);
		res.status(500).json({ errorMessage: '500 error' });
	}
});

// 🌕   GET all users
router.get('/', async (req, res) => {
	try {
		const users = await Users.get();
		res.status(200).json(users);
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ errorMessage: '500 error' });
	}
});

// 🌕   GET specific user by id
router.get('/:id', [validateUserId], async (req, res) => {
	res.status(200).json(req.user);
});

// 🌕   GET all posts for specific user
router.get('/:id/posts', [validateUserId], async (req, res) => {
	// res.status(200).json(req.user);
});

router.delete('/:id', (req, res) => {
	// do your magic!
});

router.put('/:id', (req, res) => {
	// do your magic!
});

// //custom middleware

// function validateUserId(req, res, next) {
// 	// do your magic!
// }

// function validateUser(req, res, next) {
// 	// do your magic!
// }

// function validatePost(req, res, next) {
// 	// do your magic!
// }

module.exports = router;
