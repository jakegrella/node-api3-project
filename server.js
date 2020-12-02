const express = require('express');

const logger = require('./middlewares/logger.js');
// const validateUserId = require('./middlewares/validateUserId');

const userRouter = require('./users/userRouter');
const postRouter = require('./posts/postRouter');

const server = express();

//custom middleware
server.use(logger);
server.use(express.json());
// server.use('/api/users/:id', validateUserId);

server.use('/api/users', userRouter);
// server.use('/api/users/:id/posts', postRouter);

server.get('/', (req, res) => {
	res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
