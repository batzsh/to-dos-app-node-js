import { prisma } from "../../../database/prisma-client";

export class CreateTodoUseCase {
  async execute(user_id: string, { title, deadline }: CreateTodoUseCase.Request) {
    const todo = await prisma.todos.create({
      data: {
        user_id,
        title,
        deadline
      }
    });

    return todo;
  }
}

export namespace CreateTodoUseCase {
  export interface Request {
    title: string;
    deadline: Date;
  }
}
