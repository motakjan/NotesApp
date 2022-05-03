import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
  checkIfProvidedUsersExists,
  createOne,
  deleteOne,
  findAll,
  findOne,
  updateOne,
} from '../services/task.service';
import { TActionOneParams, TCreateOneBody, TUpdateOneBody, TUpdateOneParams } from '../schemas/task.schemas';

export const getTasksHandler = async (req: Request, res: Response) => {
  const tasks = await findAll();
  return res.status(StatusCodes.OK).json(tasks);
};

export const getTaskHandler = async (req: Request<TActionOneParams>, res: Response) => {
  try {
    const task = await findOne(req.params.id);
    if (!task) return res.status(StatusCodes.NOT_FOUND).json({ errorMessage: 'task not found.' });

    return res.status(StatusCodes.OK).json(task);
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

export const createTaskHandler = async (req: Request<{}, {}, TCreateOneBody>, res: Response) => {
  try {
    const checkExisting = await checkIfProvidedUsersExists(req.body.users);

    if (!checkExisting)
      return res.status(StatusCodes.NOT_FOUND).json({ errorMessage: 'Incorrect data in users field.' });

    const task = await createOne(req.body);

    return res.status(StatusCodes.OK).json(task);
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

export const updateTaskHandler = async (req: Request<TUpdateOneParams, {}, TUpdateOneBody>, res: Response) => {
  try {
    const checkExisting = await checkIfProvidedUsersExists(req.body.users);

    if (!checkExisting)
      return res.status(StatusCodes.NOT_FOUND).json({ errorMessage: 'Incorrect data in users field.' });

    const task = await updateOne(req.params.id, req.body);
    if (!task) return res.status(StatusCodes.NOT_FOUND).json({ errorMessage: 'Task not found.' });

    return res.status(StatusCodes.OK).json(task);
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

export const deleteTaskHandler = async (req: Request<TActionOneParams>, res: Response) => {
  try {
    const task = await deleteOne(req.params.id);

    if (!task) return res.status(StatusCodes.NOT_FOUND).json({ errorMessage: 'Task not found.' });
    return res.status(StatusCodes.OK).json(task);
  } catch (err) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
