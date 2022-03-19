import * as UsersController from '../controllers/user.controller';
import express from "express";

const usersRouter = express.Router();

usersRouter.get('/', UsersController.getUsersHandler);

export default usersRouter;
