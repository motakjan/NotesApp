import express from 'express';
import { processRequest } from 'zod-express-middleware';
import * as AuthController from '../controllers/auth.controller';
import { loginUserSchema, registerUserSchema } from '../schemas/auth.schemas';

const authRouter = express.Router();

authRouter.post('/register', processRequest({body: registerUserSchema.body}), AuthController.registerHandler);
authRouter.post('/login', processRequest({body: loginUserSchema.body}), AuthController.loginHandler);
authRouter.get('/isLoggedIn', AuthController.isLoggedInHandler);

export default authRouter;
