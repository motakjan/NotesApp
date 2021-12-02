const postsRouter = require('express').Router();
const verify = require('./verifyToken');

import { Request, Response } from 'express';

type verifyType = {
    Request: Request;
    user: any;
    header: (token: string) => string;
};

postsRouter.get('/', verify, async (req: verifyType, res: Response) => {
    return res.status(200).json(req.user);
});

module.exports = postsRouter;
