import {Request, Response} from 'express';

export const getPostsHandler = async (req: Request, res: Response) => {
    return res.status(200).json(req.user);
};
