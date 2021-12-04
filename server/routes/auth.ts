const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

import { Request, Response } from 'express';
import { validatePassword, generateErrorObject } from '../helpers/helpers';

const User = require('../models/User');

authRouter.post('/register', async (req: Request, res: Response) => {
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
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
});

authRouter.post('/login', async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json({ errorMessage: 'User not found.' });

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        !validPassword &&
            res.status(400).json({ errorMessage: 'Wrong password.' });

        // Create and assign a token
        const { _doc: userInfo } = user;
        const jwtToken = jwt.sign({ userInfo }, process.env.JWT_TOKEN_SECRET);

        //! Will this set header on frontend?
        return res
            .header('auth-token', jwtToken)
            .status(200)
            .json({ jwtToken });
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = authRouter;
