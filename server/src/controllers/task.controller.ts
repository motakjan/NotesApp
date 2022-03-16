import { Request, Response } from "express";
import {
  checkIfAllUsersExists,
  createTask,
  findAllTasks,
} from "../services/task.service";

export const getTasksHandler = async (req: Request, res: Response) => {
  try {
    const tasks = await findAllTasks();
    return res.status(200).json(tasks);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const createTaskHandler = async (req: Request, res: Response) => {
  try {
    const checkExisting = await checkIfAllUsersExists(req.body.users);

    if (!checkExisting)
      return res.status(404).json({ errorMessage: "Users does not exist." });

    const task = createTask(req.body);

    return res.status(200).json(task);
  } catch (err) {
    return res.status(500).json(err);
  }
};
