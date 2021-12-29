import {Request, Response} from 'express';
import UserModel from '../models/user.model';

export const getUsersHandler = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
};
