import bcrypt from 'bcrypt';
import { TokenPayload } from 'google-auth-library';
import UserModel, { User } from '../models/user.model';
import { client } from '../utils/googleLoginClient';

export const hashPassword = async (password: User['password']) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const createUser = async (userData: Omit<User, 'password'>, hashedPassword: string) => {
  const newUser = new UserModel({
    ...userData,
    password: hashedPassword,
  });

  return newUser.save();
};

export const findUser = async (email: User['email']) => {
  const user = await UserModel.findOne({ email });
  if (!user) return false;

  return user;
};

export const findUserById = async (id: string) => {
  const user = await UserModel.findById(id);
  if (!user) return false;

  return user;
};

export const isPasswordValid = async (storedPassword: User['password'], inputPassword: User['password']) =>
  bcrypt.compare(inputPassword, storedPassword);

export const getGoogleClient = async (body: any) => {
  const { credential } = body;
  const ticket = await client.verifyIdToken({
    idToken: credential,
    audience: process.env.CLIENT_ID,
  });
  // eslint-disable-next-line @typescript-eslint/naming-convention
  return ticket.getPayload() as TokenPayload;
};
