import { prisma } from "../../../database/prisma-client";

export class CreateTodoUseCase {
  async execute({ user_id, title, deadline }: CreateTodoUseCase.Request) {
    const userExists = await prisma.users.findUnique({
      where: {
        id: user_id
      }
    });

    if (!userExists) {
      throw new Error("User does not exists");
    }

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
    user_id: string;
    title: string;
    deadline: Date;
  }
}
