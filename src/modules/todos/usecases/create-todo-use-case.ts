import { prisma } from "../../../database/prisma-client";

export class CreateTodoUseCase {
  async execute({ title, deadline, username }: CreateTodoUseCase.Request) {
    const userExists = await prisma.users.findUnique({
      where: {
        username
      }
    });

    if (!userExists) {
      throw new Error("User does not exists");
    }

    const todo = await prisma.todos.create({
      data: {
        title,
        deadline,
        username
      }
    });

    return todo;
  }
}

export namespace CreateTodoUseCase {
  export interface Request {
    username: string;
    title: string;
    deadline: Date;
  }
}
