import  UserModel from '../models/user.model';

export const findAll = async () => await UserModel.find();

export const findOne = async (id: string) => await UserModel.findById(id);

export const updateOne = async (id: string, data: any) => await UserModel.findByIdAndUpdate(id, data, {
    new: true,
  });

export const deleteOne = async (id: string) => await UserModel.findByIdAndDelete(id);

export const addUserAvatar = async (id: string, path: string) => await UserModel.findByIdAndUpdate(id, {
    image: path,
  }, {new: true})




