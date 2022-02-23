import { Request, Response } from "express";
import { DeleteTodoByIdUseCase } from "../usecases/delete-todo-by-id-use-case";

export class DeleteTodoByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteTodoByIdUseCase = new DeleteTodoByIdUseCase();
    await deleteTodoByIdUseCase.execute(id);

    return response.status(204);
  }
}
