import { CreateUserUseCase } from "../usecases/create-user-use-case";
import { Request, Response } from "express";

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { name, username, password } = request.body;

    const createUserUseCase = new CreateUserUseCase();
    const result = await createUserUseCase.execute({
      name,
      username,
      password
    });

    return response.json(result);
  }
}
