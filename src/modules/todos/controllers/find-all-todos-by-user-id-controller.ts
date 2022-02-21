import { Request, Response } from "express";
import { FindAllTodosByUserIdUseCase } from "../usecases/find-all-todos-by-user-id-use-case";

export class FindAllTodosByUserIdController {
  async handle(request: Request, response: Response) {
    const { user_id } = request.params;
    const findAllTodosByUserIdUseCase = new FindAllTodosByUserIdUseCase();

    const todos = await findAllTodosByUserIdUseCase.execute(user_id);

    return response.json(todos);
  }
}
