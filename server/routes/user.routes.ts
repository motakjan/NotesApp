const usersRouter = require('express').Router();
const UsersController = require('../controllers/user.controller');

usersRouter.get('/', UsersController.getUsersHandler);

export default usersRouter;
