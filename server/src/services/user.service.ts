import UserModel from '../models/user.model';

export const findAll = async () => UserModel.find();

export const findOne = async (id: string) => UserModel.findById(id);

export const updateOne = async (id: string, data: any) =>
  UserModel.findByIdAndUpdate(id, data, {
    new: true,
  });

export const deleteOne = async (id: string) => UserModel.findByIdAndDelete(id);

export const addUserAvatar = async (id: string, path: string) =>
  UserModel.findByIdAndUpdate(
    id,
    {
      image: `${process.env.BASE_URL}${path}`,
    },
    { new: true }
  );
