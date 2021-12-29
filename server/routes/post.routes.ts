const postsRouter = require('express').Router();
const PostsController = require('../controllers/post.controller');

postsRouter.get('/', PostsController.getPostsHandler);

export default postsRouter;
