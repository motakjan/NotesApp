import express from 'express';
import * as PostsController from '../controllers/post.controller';

const postsRouter = express.Router();

postsRouter.get('/', PostsController.getPostsHandler);

export default postsRouter;
