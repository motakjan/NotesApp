import { TUpdateOneBody } from '../schemas/task.schemas';
import TaskModel, { Task } from '../models/task.model';
import UserModel from '../models/user.model';

export const findAll = async () => TaskModel.find();

export const findOne = async (id: string) => TaskModel.findById(id);

export const createOne = async (data: Task) => {
  const newTest = new TaskModel({
    ...data,
  });

  return newTest.save();
};

export const updateOne = async (id: string, data: TUpdateOneBody) =>
  TaskModel.findByIdAndUpdate(id, data, {
    new: true,
  });

export const deleteOne = async (id: string) => TaskModel.findByIdAndDelete(id);

export const checkIfProvidedUsersExists = async (users: TUpdateOneBody['users'] | undefined) => {
  let usersFound = [];
  if (users?.length === 0) return true;

  await UserModel.find({ _id: { $in: users } })
    .then(docs => {
      usersFound = [...docs];
      return docs.length === users?.length;
    })
    .catch(() => false);

  return usersFound.length === users?.length;
};
