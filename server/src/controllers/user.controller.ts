import {Request, Response} from 'express';
import UserModel from '../models/user.model';
import {findAllUsers} from '../services/user.service';

export const getUsersHandler = async (req: Request, res: Response) => {
    try {
        const users = await findAllUsers();
        return res.status(200).json(users);
    } catch (err) {
        return res.status(500).json(err);
    }
};
