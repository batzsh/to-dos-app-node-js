import { Router } from "express";
import todosRoutes from "./src/routes/todos-routes";
import usersRoutes from "./src/routes/users-routes";

const routes = Router();

routes.use("/todos", todosRoutes);
routes.use("/users", usersRoutes);

export default routes;
