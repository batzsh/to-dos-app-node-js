import { Router } from "express";
import { CreateTodoController } from "../modules/todos/controllers/create-todo-controller";

const todosRoutes = Router();

const createTodoController = new CreateTodoController();
todosRoutes.post("/", createTodoController.handle);

export default todosRoutes;
