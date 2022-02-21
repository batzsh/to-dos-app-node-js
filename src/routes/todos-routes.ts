import { Router } from "express";
import { CreateTodoController } from "../modules/todos/controllers/create-todo-controller";
import { FindAllTodosByUserIdController } from "../modules/todos/controllers/find-all-todos-by-user-id-controller";

const todosRoutes = Router();

const createTodoController = new CreateTodoController();
todosRoutes.post("/", createTodoController.handle);

const findAllTodosByUserIdController = new FindAllTodosByUserIdController();
todosRoutes.get("/:user_id", findAllTodosByUserIdController.handle);

export default todosRoutes;
