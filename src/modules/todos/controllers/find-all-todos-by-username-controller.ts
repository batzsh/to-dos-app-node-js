import { Request, Response } from "express";
import { FindAllTodosByUsernameUseCase } from "../usecases/find-all-todos-by-username-use-case";

export class FindAllTodosByUsernameController {
  async handle(request: Request, response: Response) {
    const { username } = request.params;
    const findAllTodosByUserIdUseCase = new FindAllTodosByUsernameUseCase();

    const todos = await findAllTodosByUserIdUseCase.execute(username);

    return response.json(todos);
  }
}
