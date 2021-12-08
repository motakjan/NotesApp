const usersRouter = require('express').Router();
const User = require('../models/User');
const UsersController = require('../controllers/UsersController');

usersRouter.get('/', UsersController.getUsers);

module.exports = usersRouter;
