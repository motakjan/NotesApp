import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { findAll, findOne, updateOne, deleteOne } from '../services/user.service';
import { TActionOneParams, TUpdateOneBody, TUpdateOneParams } from '../schemas/user.schemas';

export const getUsersHandler = async (req: Request, res: Response) => {
  const users = await findAll();
  return res.status(StatusCodes.OK).json(users);
};

export const getUserHandler = async (req: Request<TActionOneParams>, res: Response) => {
  try {
    const user = await findOne(req.params.id);
    if (!user) return res.status(StatusCodes.NOT_FOUND).json({ errorMessage: 'User not found.' });

    return res.status(StatusCodes.OK).json(user);
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

export const updateUserHandler = async (req: Request<TUpdateOneParams, {}, TUpdateOneBody>, res: Response) => {
  try {
    const user = await updateOne(req.params.id, req.body);
    if (!user) return res.status(StatusCodes.NOT_FOUND).json({ errorMessage: 'User not found.' });

    return res.status(StatusCodes.OK).json(user);
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

export const deleteUserHandler = async (req: Request<TUpdateOneParams>, res: Response) => {
  try {
    const user = await deleteOne(req.params.id);

    if (!user) return res.status(StatusCodes.NOT_FOUND).json({ errorMessage: 'User not found.' });
    return res.status(StatusCodes.OK).json(user);
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
