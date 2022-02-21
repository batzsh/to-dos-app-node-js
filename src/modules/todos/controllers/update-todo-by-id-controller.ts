import { Request, Response } from "express";
import { UpdateTodoByIdUseCase } from "../usecases/update-todo-by-id-use-case";

export class UpdateTodoByIdController {
  async handle(request: Request, response: Response) {
    const { title, deadline } = request.body;
    const { id } = request.params;

    const updateTodoByIdUseCase = new UpdateTodoByIdUseCase();
    const todo = await updateTodoByIdUseCase.execute(id, { title, deadline });

    return response.json(todo);
  }
}
