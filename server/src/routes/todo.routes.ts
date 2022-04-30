import express from "express";
import * as TodoController from "../controllers/todo.controller";
import { validate } from "../middlewares/validate";
import {
  actionOneSchema,
  createOneSchema,
  updateOneSchema,
} from "../schemas/todo.schemas";

const todoRouter = express.Router();

todoRouter.get("/", TodoController.getTodosHandler);
todoRouter.post(
  "/",
  validate(createOneSchema),
  TodoController.createTodoHandler
);
todoRouter.put(
  "/:id",
  validate(updateOneSchema),
  TodoController.updateTodoHandler
);
todoRouter.get(
  "/:id",
  validate(actionOneSchema),
  TodoController.getTodoHandler
);
todoRouter.delete(
  "/:id",
  validate(actionOneSchema),
  TodoController.deleteTodoHandler
);

export default todoRouter;
