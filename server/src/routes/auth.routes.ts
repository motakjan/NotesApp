import * as AuthController from '../controllers/auth.controller';
import express from 'express';

const authRouter = express.Router();

authRouter.post('/register', AuthController.registerHandler);
authRouter.post('/login', AuthController.loginHandler);
authRouter.get('/isLoggedIn', AuthController.isLoggedInHandler);

export default authRouter;
