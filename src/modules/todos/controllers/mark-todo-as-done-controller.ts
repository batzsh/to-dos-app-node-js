import { Request, Response } from "express";
import { MarkTodoAsDoneUseCase } from "../usecases/mark-todo-as-done-use-case";

export class MarkTodoAsDoneController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const markTodoAsDoneUseCase = new MarkTodoAsDoneUseCase();
    const todo = await markTodoAsDoneUseCase.execute(id);

    return response.json(todo);
  }
}
