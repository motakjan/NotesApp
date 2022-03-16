import { Request,Response } from 'express'
import TaskModel from '../models/task.model'

export const getTasksHandler = async (req: Request, res: Response) => {
    try {
         const tasks = await TaskModel.find();
         return res.status(200).json(tasks);
    } catch(err) {
         return res.status(500).json(err);
    }
}
/*
export const createTaskHandler = async (req: Request, res: Response) => {
    try {
         const task = await new TaskModel({
                 ...req.body,
             });

             return await task.save();
         return res.status(200).json(task);
    } catch(err) {
         return res.status(500).json(err);
    }
} */
