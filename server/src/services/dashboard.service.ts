import  DashboardModel from '../models/dashboard.model';

export const findAll = async () => {
  return await DashboardModel.find();
};

export const findOne = async (id: string) => {
  return await DashboardModel.findById(id);
};

export const createOne = async (data: any) => {
  const newTest = new  DashboardModel({
    ...data,
  });

  return await newTest.save();
};

export const updateOne = async (id: string, data: any) => {
  return await DashboardModel.findByIdAndUpdate(id, data, {
    new: true,
  });
};

export const deleteOne = async (id: string) => {
  return await DashboardModel.findByIdAndDelete(id);
};




