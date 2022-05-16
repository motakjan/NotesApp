import jwt, { JwtPayload } from 'jsonwebtoken';
import { TokenPayload } from 'google-auth-library';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { createUser, findUser, hashPassword, isPasswordValid, findUserById } from '../services/auth.service';
import { generateErrorObject, validatePassword } from '../utils/helpers';
import { LoginUserBody, RegisterUserBody } from '../schemas/auth.schemas';
import { client } from '../utils/googleLoginClient';

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

export const googleLoginHandler = async (req: Request, res: Response) => {
  try {
    const { credential } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.CLIENT_ID,
    });
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { name, email, picture, given_name, family_name, iss } = ticket.getPayload() as TokenPayload;
    if (!email) return res.status(StatusCodes.NOT_FOUND).json({ errorMessage: 'Error while connecting with google' });
    let user = await findUser(email as string);

    if (!user) {
      const hashedPassword = await hashPassword(iss);
      user = await createUser(
        {
          username: name || '',
          email,
          image: picture,
          firstName: given_name || '',
          lastName: family_name || '',
        },
        hashedPassword
      );
    }

    const jwtToken = jwt.sign({ _id: user._id }, process.env.JWT_TOKEN_SECRET as string, { expiresIn: '7d' });
    return res.header('auth-token', jwtToken).status(StatusCodes.OK).json({ jwtToken });
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

export const getLoggedUserHandler = async (req: Request, res: Response) => {
  const token = req.header('auth-token');
  if (!token)
    return res.status(StatusCodes.UNAUTHORIZED).json(generateErrorObject('access', 'Access denied (no token)'));
  try {
    const tokenCheck = jwt.verify(token, process.env.JWT_TOKEN_SECRET as string) as JwtPayload;
    const loggedUser = await findUserById(tokenCheck?._id);

    return res.status(StatusCodes.OK).json({ loggedUser, tokenCheck, isLoggedIn: true });
  } catch (err) {
    return res.status(StatusCodes.UNAUTHORIZED).json(generateErrorObject('access', 'Invalid or expired token'));
  }
};
