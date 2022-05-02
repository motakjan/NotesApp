import express from 'express';
import { processRequest } from 'zod-express-middleware';
import * as UserController from '../controllers/user.controller';
import { actionOneSchema, updateOneSchema } from '../schemas/user.schemas';
import { avatarUpload } from '../utils/multer';

const userRouter = express.Router();

userRouter.get('/', UserController.getUsersHandler);
userRouter.get('/:id', processRequest({ params: actionOneSchema.params }), UserController.getUserHandler);
userRouter.put(
  '/:id',
  processRequest({
    body: updateOneSchema.body,
    params: updateOneSchema.params,
  }),
  UserController.updateUserHandler
);
userRouter.delete('/:id', processRequest({ params: actionOneSchema.params }), UserController.deleteUserHandler);
userRouter.post(
  '/uploadImage/:id',
  processRequest({ params: actionOneSchema.params }),
  avatarUpload.single('image'),
  UserController.uploadImageHandler
);

export default userRouter;
