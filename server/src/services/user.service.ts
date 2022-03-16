import UserModel from '../models/user.model';

export const findAllUsers = async () => {
    return await UserModel.find();
}