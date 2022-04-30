import  UserModel from '../models/user.model';

export const findAll = async () => {
  return await UserModel.find();
};

export const findOne = async (id: string) => {
  return await UserModel.findById(id);
};

export const updateOne = async (id: string, data: any) => {
  return await UserModel.findByIdAndUpdate(id, data, {
    new: true,
  });
};

export const deleteOne = async (id: string) => {
  return await UserModel.findByIdAndDelete(id);
};




