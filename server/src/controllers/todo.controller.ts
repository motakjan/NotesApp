import { Request, Response } from 'express';
import {
  checkIfProvidedUsersExists,
  createOne,
  deleteOne,
  findAll,
  findOne,
  updateOne,
} from '../services/todo.service';

export const getTodosHandler = async (req: Request, res: Response) => {
  const todos = await findAll();
  return res.status(200).json(todos);
};

export const getTodoHandler = async (req: Request, res: Response) => {
  try {
    const todo = await findOne(req.params.id);
    if (!todo) return res.status(404).json({ errorMessage: 'Todo not found.' });

    return res.status(200).json(todo);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const createTodoHandler = async (req: Request, res: Response) => {
  try {
    const checkExisting = await checkIfProvidedUsersExists(req.body.users);

    if (!checkExisting) return res.status(404).json({ errorMessage: 'Incorrect data in users field.' });

    const todo = await createOne(req.body);

    return res.status(200).json(todo);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const updateTodoHandler = async (req: Request, res: Response) => {
  try {
    const checkExisting = await checkIfProvidedUsersExists(req.body.users);

    if (!checkExisting) return res.status(404).json({ errorMessage: 'Incorrect data in users field.' });

    const todo = await updateOne(req.params.id, req.body);
    if (!todo) return res.status(404).json({ errorMessage: 'Todo not found.' });

    return res.status(200).json(todo);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const deleteTodoHandler = async (req: Request, res: Response) => {
  try {
    const todo = await deleteOne(req.params.id);

    if (!todo) return res.status(404).json({ errorMessage: 'Todo not found.' });
    return res.status(200).json(todo);
  } catch (err) {
    return res.status(500).json(err);
  }
};
