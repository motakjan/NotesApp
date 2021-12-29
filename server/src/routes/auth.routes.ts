import * as AuthController from '../controllers/auth.controller';
import express from 'express';

const authRouter = express.Router();

authRouter.post('/register', AuthController.registerHandler);
authRouter.post('/login', AuthController.loginHandler);

export default authRouter;
