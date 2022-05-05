import express from 'express';
import { processRequest } from 'zod-express-middleware';
import * as TaskController from '../controllers/task.controller';
import { actionOneSchema, createOneSchema, updateOneSchema } from '../schemas/task.schemas';

const taskRouter = express.Router();

taskRouter.get('/', TaskController.getTasksHandler);
taskRouter.post('/', processRequest({ body: createOneSchema.body }), TaskController.createTaskHandler);
taskRouter.put(
  '/:id',
  processRequest({ params: updateOneSchema.params, body: updateOneSchema.body }),
  TaskController.updateTaskHandler
);
taskRouter.get('/:id', processRequest({ params: actionOneSchema.params }), TaskController.getTaskHandler);
taskRouter.delete('/:id', processRequest({ params: actionOneSchema.params }), TaskController.deleteTaskHandler);

export default taskRouter;
