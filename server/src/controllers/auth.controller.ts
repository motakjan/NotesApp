import jwt from 'jsonwebtoken';

import { Request, Response } from 'express';
import { createUser, findUser, hashPassword, isPasswordValid } from '../services/auth.service';
import { generateErrorObject, validatePassword } from '../utils/helpers';

export const registerHandler = async (req: Request, res: Response) => {
  try {
    if (!validatePassword(req.body.password)) {
      return res
        .status(403)
        .json(generateErrorObject('password', 'Password is not correct (Either missing a uppercase letter or number)'));
    }

    const hashedPassword = await hashPassword(req.body.password);
    const user = await createUser(req.body, hashedPassword);

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const loginHandler = async (req: Request, res: Response) => {
  try {
    const user = await findUser(req.body.email, req.body.username);
    if (!user) return res.status(404).json({ errorMessage: 'User not found.' });

    const validPassword = await isPasswordValid(user.password, req.body.password);
    if (!validPassword) return res.status(400).json({ errorMessage: 'Invalid password.' });

    const jwtToken = jwt.sign({ _id: user._id }, process.env.JWT_TOKEN_SECRET as string, { expiresIn: '7d' });

    return res.header('auth-token', jwtToken).status(200).json({ jwtToken });
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const isLoggedInHandler = async (req: Request, res: Response) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).json(generateErrorObject('access', 'Access denied (no token)'));

  try {
    const tokenCheck = jwt.verify(token, process.env.JWT_TOKEN_SECRET as string);
    return res.status(200).json({ isLoggedIn: true, tokenCheck });
  } catch (err) {
    return res.status(400).json(generateErrorObject('access', 'Invalid or expired token'));
  }
};
