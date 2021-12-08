import { RequestType } from '../types/usersTypes';
import { Response } from 'express';

exports.getPosts = async (req: RequestType, res: Response) => {
    return res.status(200).json(req.user);
};
