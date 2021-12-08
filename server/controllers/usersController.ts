import { RequestType } from '../types/usersTypes';
import { Response } from 'express';

const User = require('../models/User');

exports.getUsers = async (req: RequestType, res: Response) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
};
