import express from 'express';
import { processRequest } from 'zod-express-middleware';
import * as UserController from '../controllers/user.controller';
import { actionOneSchema, createOneSchema, updateOneSchema } from '../schemas/user.schemas';

const userRouter = express.Router();

userRouter.get('/', UserController.getUsersHandler);
userRouter.get(
  '/:id',
  processRequest({ params: actionOneSchema.params }),
  UserController.getUserHandler
);
userRouter.put(
  '/:id',
  processRequest({
    body: updateOneSchema.body,
    params: updateOneSchema.params,
  }),
  UserController.updateUserHandler
);
userRouter.delete(
  '/:id',
  processRequest({ params: actionOneSchema.params }),
  UserController.deleteUserHandler
);

export default userRouter;
