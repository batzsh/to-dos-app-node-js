import { CreateTodoUseCase } from "../usecases/create-todo-use-case";
import { Request, Response } from "express";

export class CreateTodoController {
  async handle(request: Request, response: Response) {
    const { username, title, deadline } = request.body;

    const createTodoUseCase = new CreateTodoUseCase();
    const result = await createTodoUseCase.execute({
      username,
      title,
      deadline
    });

    return response.json(result);
  }
}
