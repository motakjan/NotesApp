const jwt = require('jsonwebtoken');
import { generateErrorObject } from '../helpers/helpers';
import { Request, Response, NextFunction } from 'express';

type verifyType = {
    Request: Request;
    user: any;
    header: (token: string) => string;
};

const verify = (req: verifyType, res: Response, next: NextFunction) => {
    const token = req.header('auth-token');
    if (!token)
        return res
            .status(401)
            .json(generateErrorObject('access', 'Access denied (no token)'));

    try {
        const verifiedUser = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
        req.user = verifiedUser;
        next();
    } catch (err) {
        res.status(400).json(generateErrorObject('access', 'Invalid token'));
    }
};

module.exports = verify;
