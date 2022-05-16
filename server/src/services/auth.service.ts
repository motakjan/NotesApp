import bcrypt from 'bcrypt';
import UserModel, { User } from '../models/user.model';

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
