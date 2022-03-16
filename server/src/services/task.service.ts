import TaskModel from "../models/task.model";
import UserModel from "../models/user.model";

export const findAllTasks = async () => {
  return TaskModel.find();
};

export const checkIfAllUsersExists = async (users: Array<string>) => {
  let usersFounded = [];

  await UserModel.find({ _id: { $in: users } })
    .then(function (docs) {
      console.log(docs);
      usersFounded = [...docs];
    })
    .catch(function () {
      return false;
    });

  return usersFounded.length === users.length;
};

export const createTask = async (taskData: any) => {
  const newTask = await new TaskModel({
    ...taskData,
  });

  return await newTask.save();
};
