import {NextFunction, Request, Response} from 'express';

export const validate = (schema:any) => async (req:Request, res:Response, next:NextFunction) => {
    try {
        await schema.validate({
            body: req.body,
            query: req.query,
            params: req.params,
        },{
            abortEarly: false
        })
        next();
    } catch(error) {
        return res.status(400).json({error})
    }
}