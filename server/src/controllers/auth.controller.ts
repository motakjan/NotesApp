import jwt from 'jsonwebtoken';

import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { createUser, findUser, hashPassword, isPasswordValid } from '../services/auth.service';
import { generateErrorObject, validatePassword } from '../utils/helpers';
import { LoginUserBody, RegisterUserBody } from '../schemas/auth.schemas';

export const registerHandler = async (req: Request<{}, {}, RegisterUserBody>, res: Response) => {
  try {
    if (!validatePassword(req.body.password)) {
      return res
        .status(StatusCodes.FORBIDDEN)
        .json(generateErrorObject('password', 'Password is not correct (Either missing a uppercase letter or number)'));
    }

    const hashedPassword = await hashPassword(req.body.password);
    const user = await createUser(req.body, hashedPassword);

    return res.status(StatusCodes.OK).json(user);
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

export const loginHandler = async (req: Request<{}, {}, LoginUserBody>, res: Response) => {
  try {
    const user = await findUser(req.body.email);
    if (!user) return res.status(StatusCodes.NOT_FOUND).json({ errorMessage: 'User not found.' });

    const validPassword = await isPasswordValid(user.password, req.body.password);
    if (!validPassword) return res.status(StatusCodes.FORBIDDEN).json({ errorMessage: 'Invalid password.' });

    const jwtToken = jwt.sign({ _id: user._id }, process.env.JWT_TOKEN_SECRET as string, { expiresIn: '7d' });

    return res.header('auth-token', jwtToken).status(StatusCodes.OK).json({ jwtToken });
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

export const isLoggedInHandler = async (req: Request, res: Response) => {
  const token = req.header('auth-token');
  if (!token)
    return res.status(StatusCodes.UNAUTHORIZED).json(generateErrorObject('access', 'Access denied (no token)'));
  try {
    const tokenCheck = jwt.verify(token, process.env.JWT_TOKEN_SECRET as string);
    return res.status(StatusCodes.OK).json({ isLoggedIn: true, tokenCheck });
  } catch (err) {
    return res.status(StatusCodes.UNAUTHORIZED).json(generateErrorObject('access', 'Invalid or expired token'));
  }
};
