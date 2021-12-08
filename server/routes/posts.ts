const postsRouter = require('express').Router();
const PostsController = require('../controllers/postsController');

postsRouter.get('/', PostsController.getPosts);

module.exports = postsRouter;
