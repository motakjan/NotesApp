import TodoModel from "../models/todo.model";
import UserModel from "../models/user.model";

export const findAll = async () => {
  return TodoModel.find();
};

export const findOne = async (id: string) => {
  return TodoModel.findById(id);
};

export const createOne = async (data: any) => {
  const newTest = new TodoModel({
    ...data,
  });

  return await newTest.save();
};

export const updateOne = async (id: string, data: any) => {
  return TodoModel.findByIdAndUpdate(id, data, {
    new: true,
  });
};

export const deleteOne = async (id: string) => {
  return TodoModel.findByIdAndDelete(id);
};

export const checkIfProvidedUsersExists = async (users: Array<string>) => {
  let usersFound = [];

  await UserModel.find({ _id: { $in: users } })
    .then(function (docs) {
      usersFound = [...docs];
    })
    .catch(function () {
      return false;
    });

  return usersFound.length === users.length;
};
