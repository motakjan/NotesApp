import express from "express";
import * as UsersController from '../controllers/user.controller';

const usersRouter = express.Router();

usersRouter.get('/', UsersController.getUsersHandler);

export default usersRouter;
