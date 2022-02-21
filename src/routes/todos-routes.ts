import { Router } from "express";
import { CreateTodoController } from "../modules/todos/controllers/create-todo-controller";
import { FindAllTodosByUserIdController } from "../modules/todos/controllers/find-all-todos-by-user-id-controller";
import { UpdateTodoByIdController } from "../modules/todos/controllers/update-todo-by-id-controller";

const todosRoutes = Router();

const createTodoController = new CreateTodoController();
todosRoutes.post("/", createTodoController.handle);

const findAllTodosByUserIdController = new FindAllTodosByUserIdController();
todosRoutes.get("/:user_id", findAllTodosByUserIdController.handle);

const updateTodoByIdController = new UpdateTodoByIdController();
todosRoutes.put("/:id", updateTodoByIdController.handle);

export default todosRoutes;
