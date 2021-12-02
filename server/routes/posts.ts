import {RequestType} from "../types/usersTypes";
import {Response} from 'express';

const postsRouter = require('express').Router();
const verify = require('./verifyToken');

postsRouter.get('/', verify, async (req: RequestType, res: Response) => {
    return res.status(200).json(req.user);
});

module.exports = postsRouter;
