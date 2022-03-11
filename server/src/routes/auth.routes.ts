import * as AuthController from '../controllers/auth.controller';
import express from 'express';
import {validate} from "../middlewares/validate";
import {loginSchema, registerSchema} from "../validators/auth.schemas";

const authRouter = express.Router();

authRouter.post('/register', validate(registerSchema), AuthController.registerHandler);
authRouter.post('/login', validate(loginSchema), AuthController.loginHandler);
authRouter.get('/isLoggedIn', AuthController.isLoggedInHandler);

export default authRouter;
