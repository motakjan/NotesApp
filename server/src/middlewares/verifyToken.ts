import { NextFunction, Request, Response } from 'express';

import jwt from 'jsonwebtoken';
import { generateErrorObject } from '../utils/helpers';

const verify = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).json(generateErrorObject('access', 'Access denied (no token)'));

  try {
    req.user = jwt.verify(token, process.env.JWT_TOKEN_SECRET as string);
    return next();
  } catch (err) {
    return res.status(400).json(generateErrorObject('access', 'Invalid token'));
  }
};

export default verify;
