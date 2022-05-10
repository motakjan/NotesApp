import _ from 'lodash';
import UserModel from '../models/user.model';
import TaskModel from '../models/task.model';
import DashboardModel from '../models/dashboard.model';

export const findAll = async () => DashboardModel.find();

export const findOne = async (id: string) => DashboardModel.findById(id);

export const findOneExtended = async (dashboard: any) => {
  const ids = _.map(dashboard.tasks, 'id');
  const dashboardTasks = await TaskModel.find({ _id: { $in: ids } });
  const dashboardUsers = await UserModel.find({ _id: { $in: dashboard.users } });

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { title, description, tasks, _id, updatedAt, createdAt } = dashboard;
  const extendedTasks = tasks.map((task: any) => {
    // eslint-disable-next-line no-underscore-dangle
    const foundTask = dashboardTasks.find((result: any) => result._id.toString() === task.id);
    const task2 = { ...task };
    task2.title = foundTask?.title;
    task2.description = foundTask?.description;
    task2.users = foundTask?.users;
    task2.tags = foundTask?.tags;
    task2.type = foundTask?.type;
    task2.updatedAt = foundTask?.updatedAt;
    return task2;
  });
  return { title, description, users: dashboardUsers, tasks: extendedTasks, _id, updatedAt, createdAt };
};

export const createOne = async (data: any) => {
  const newTest = new DashboardModel({
    ...data,
  });

  return newTest.save();
};

export const updateOne = async (id: string, data: any) =>
  DashboardModel.findByIdAndUpdate(id, data, {
    new: true,
  });

export const deleteOne = async (id: string) => DashboardModel.findByIdAndDelete(id);
