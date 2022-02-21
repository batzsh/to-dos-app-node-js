import { CreateTodoUseCase } from "../usecases/create-todo-use-case";
import { Request, Response } from "express";

export class CreateTodoController {
  async handle(request: Request, response: Response) {
    const { title, deadline } = request.body;
    const { user_id } = request.params;

    const createTodoUseCase = new CreateTodoUseCase();
    const result = await createTodoUseCase.execute(user_id, {
      title,
      deadline
    });

    return response.json(result);
  }
}
