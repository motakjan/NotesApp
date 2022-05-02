import TodoModel from '../models/todo.model';
import UserModel from '../models/user.model';

export const findAll = async () => TodoModel.find();

export const findOne = async (id: string) => TodoModel.findById(id);

export const createOne = async (data: any) => {
  const newTest = new TodoModel({
    ...data,
  });

  return newTest.save();
};

export const updateOne = async (id: string, data: any) =>
  TodoModel.findByIdAndUpdate(id, data, {
    new: true,
  });

export const deleteOne = async (id: string) => TodoModel.findByIdAndDelete(id);

export const checkIfProvidedUsersExists = async (users: Array<string>) => {
  let usersFound = [];

  await UserModel.find({ _id: { $in: users } })
    .then(docs => {
      usersFound = [...docs];
      return docs.length === users.length;
    })
    .catch(() => false);

  return usersFound.length === users.length;
};
