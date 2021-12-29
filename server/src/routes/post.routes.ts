import * as PostsController from '../controllers/post.controller';
import express from 'express';

const postsRouter = express.Router();

postsRouter.get('/', PostsController.getPostsHandler);

export default postsRouter;
