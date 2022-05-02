import bcrypt from 'bcrypt';
import UserModel from '../models/user.model';

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const createUser = async (userData: any, hashedPassword: string) => {
  const newUser = new UserModel({
    ...userData,
    password: hashedPassword,
  });

  return await newUser.save();
};

export const findUser = async (email: string) => {
  const user = await UserModel.findOne({ email });
  if (!user) return false;

  return user;
};

export const isPasswordValid = async (storedPassword: string, inputPassword: string) =>
  await bcrypt.compare(inputPassword, storedPassword);
