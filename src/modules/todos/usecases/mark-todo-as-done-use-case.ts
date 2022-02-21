import { prisma } from "../../../database/prisma-client";

export class MarkTodoAsDoneUseCase {
  async execute(id: string) {
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
        done: true
      }
    });

    return result;
  }
}
