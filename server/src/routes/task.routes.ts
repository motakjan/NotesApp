import express from "express";
import * as TaskController from '../controllers/task.controller';

const tasksRouter = express.Router();

tasksRouter.get('/', TaskController.getTasksHandler);
/* tasksRouter.post('/createTask', TaskController.createTaskHandler); */

export default tasksRouter;
