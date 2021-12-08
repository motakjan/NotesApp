import {RequestType} from "../types/usersTypes";
import {generateErrorObject} from '../helpers/helpers';
import {NextFunction, Response} from 'express';

const jwt = require('jsonwebtoken');

const verify = (req: RequestType, res: Response, next: NextFunction) => {
    const token = req.header('auth-token');
    if (!token)
        return res
            .status(401)
            .json(generateErrorObject('access', 'Access denied (no token)'));

    try {
        req.user = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
        next();
    } catch (err) {
        res.status(400).json(generateErrorObject('access', 'Invalid token'));
    }
};

module.exports = verify;
