import jwt from 'jsonwebtoken';

import { Request, Response } from 'express';
import {
    createUser,
    findUser,
    hashPassword,
    isPasswordValid,
} from '../services/auth.service';
import { validatePassword, generateErrorObject } from '../utils/helpers';

export const registerHandler = async (req: Request, res: Response) => {
    try {
        if (!validatePassword(req.body.password)) {
            return res
                .status(403)
                .json(
                    generateErrorObject(
                        'password',
                        'Password is not correct (Either missing a uppercase letter or number)'
                    )
                );
        }

        const hashedPassword = await hashPassword(req.body.password);
        const user = await createUser(req.body, hashedPassword);

        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
};

export const loginHandler = async (req: Request, res: Response) => {
    try {
        const user = await findUser(req.body.email, req.body.username);
        if (!user)
            return res.status(404).json({ errorMessage: 'User not found.' });

        const validPassword = isPasswordValid(user.password, req.body.password);
        if (!validPassword)
            return res.status(400).json({ errorMessage: 'Invalid password.' });

        const jwtToken = jwt.sign(
            { _id: user._id },
            process.env.JWT_TOKEN_SECRET as string
        );

        return res
            .header('auth-token', jwtToken)
            .status(200)
            .json({ jwtToken });
    } catch (err) {
        return res.status(500).json(err);
    }
};
