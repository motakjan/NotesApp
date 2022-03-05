import {NextFunction, Request, Response} from 'express';

export const validate = (schema:any) => async (req:Request, res:Response, next:NextFunction) => {
    // TODO validate query and params
    const body = req.body;
    try {
        await schema.validate(body,{
            abortEarly: false
        });
        next();
    } catch(error) {
        return res.status(400).json({error})
    }
}