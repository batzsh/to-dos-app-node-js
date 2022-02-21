import { prisma } from "../../../database/prisma-client";

export class UpdateTodoByIdUseCase {
  async execute(id: string, { title, deadline }: UpdateTodoByIdUseCase.Request) {
    const todoExists = await prisma.todos.findUnique({
      where: {
        id
      }
    });

    if (!todoExists) {
      throw new Error("Todo does not exists");
    }

    const result = await prisma.todos.update({
      where: {
        id
      },
      data: {
        title,
        deadline
      }
    });

    return result;
  }
}

export namespace UpdateTodoByIdUseCase {
  export interface Request {
    title: string;
    deadline: Date;
  }
}
