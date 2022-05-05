import _ from 'lodash';
import TaskModel from '../models/task.model';
import DashboardModel from '../models/dashboard.model';
import { findOne as findOneTask } from './task.service';

export const findAll = async () => DashboardModel.find();

export const findOne = async (id: string) => DashboardModel.findById(id);

export const findOneExtended = async (dashboard: any) => {
  const ids = _.map(dashboard.tasks, 'id');
  const results = await TaskModel.find({ _id: { $in: ids } });
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { title, description, users, tasks, _id, updatedAt, createdAt } = dashboard;
  const extendedTasks = tasks.map((task: any, index: number) => {
    const task2 = { ...task };
    task2.title = results[index]?.title;
    task2.description = results[index]?.description;
    task2.users = results[index]?.users;
    task2.tags = results[index]?.tags;
    return task2;
  });
  return { title, description, users, tasks: extendedTasks, _id, updatedAt, createdAt };
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
