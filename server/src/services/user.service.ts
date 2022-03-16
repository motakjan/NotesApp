import UserModel from '../models/user.model';

export const findAllUsers = async () => {
    return UserModel.find();
}